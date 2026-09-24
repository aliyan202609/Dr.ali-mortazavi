(() => {
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const header=$('[data-header]');
  const menu=$('#mobile-menu');
  const toggles=$$('[data-menu-toggle]');
  const closeMenu=()=>{menu?.classList.remove('open');document.body.classList.remove('menu-open');toggles.forEach(b=>{b.classList.remove('open');b.setAttribute('aria-expanded','false')});menu?.setAttribute('aria-hidden','true')};
  const openMenu=()=>{menu?.classList.add('open');document.body.classList.add('menu-open');toggles.forEach(b=>{b.classList.add('open');b.setAttribute('aria-expanded','true')});menu?.setAttribute('aria-hidden','false')};
  toggles.forEach(b=>b.addEventListener('click',()=>menu?.classList.contains('open')?closeMenu():openMenu()));
  $$('[data-menu-close]').forEach(b=>b.addEventListener('click',closeMenu));
  $$('.mobile-nav a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();closeModal()}});
  const onScroll=()=>header?.classList.toggle('scrolled',scrollY>18); onScroll(); addEventListener('scroll',onScroll,{passive:true});
  // render data-driven modules
  const specialtyWrap=$('[data-specialties]');
  if(specialtyWrap) specialtyWrap.innerHTML=SITE.specialties.map(s=>`<article class="specialty"><div class="specialty-top"><span>${s.n}</span><span>${s.en}</span></div><div><h3>${s.title}</h3><p>${s.desc}</p></div><a class="specialty-link" href="#contact">مشاهده مسیر <span>↗</span></a></article>`).join('');
  const caseWrap=$('[data-cases]');
  if(caseWrap) caseWrap.innerHTML=SITE.cases.map((c,i)=>`<article class="case-card"><div class="case-visual"><img src="${c.before}" alt="${c.title} — تصویر قبل" loading="lazy"><img class="case-after" data-after alt="${c.title} — تصویر بعد" loading="lazy"><span class="case-label before">BEFORE</span><span class="case-label after">AFTER</span><span class="case-divider" data-divider></span><span class="case-handle" data-handle>↔</span><input class="case-range" type="range" min="0" max="100" value="50" aria-label="مقایسه قبل و بعد"></div><div class="case-info"><small>${c.en}</small><h3>${c.title}</h3><p>${c.note}</p><a href="#" class="case-more" data-case-open="${i}">جزئیات کیس <span>↗</span></a></div></article>`).join('');
  $$('.case-card').forEach((card,i)=>{const range=$('.case-range',card),after=$('.case-after',card),divider=$('[data-divider]',card),handle=$('[data-handle]',card);const update=()=>{const v=range.value;after.style.clipPath=`inset(0 0 0 ${v}%)`;divider.style.left=v+'%';handle.style.left=v+'%'};range.addEventListener('input',update);update();card.querySelector('[data-case-open]').addEventListener('click',e=>{e.preventDefault();openModal(i)})});
  const videoWrap=$('[data-videos]');
  if(videoWrap) videoWrap.innerHTML=SITE.videos.map((v,i)=>`<article class="video-card"><div class="video-thumb"><img src="${v.image}" alt="${v.title}" loading="lazy"><button class="video-play" ${v.src?`data-src="${v.src}"`:''} aria-label="پخش ${v.title}">▶</button></div><div class="video-body"><small>${v.meta}</small><h3>${v.title}</h3></div></article>`).join('');
  $$('.video-play').forEach(btn=>btn.addEventListener('click',()=>{const src=btn.dataset.src; if(!src)return;const v=$('.video-hero video');if(v){v.src=src;v.play().catch(()=>{});document.querySelector('.video-hero')?.scrollIntoView({behavior:'smooth',block:'center'})}}));
  const articleWrap=$('[data-articles]');
  if(articleWrap) articleWrap.innerHTML=SITE.articles.map(a=>`<article class="article"><div class="article-top"><span>${a.cat}</span><span>${a.date}</span></div><h3>${a.title}</h3><p>${a.desc}</p><a class="article-link" href="#contact">خواندن مقاله <span>↗</span></a></article>`).join('');
  const modal=$('[data-modal]'), mBefore=$('[data-modal-before]'),mAfter=$('[data-modal-after]'),mTitle=$('[data-modal-title]'),mEn=$('[data-modal-en]'),mNote=$('[data-modal-note]');
  function openModal(i){const c=SITE.cases[i];if(!modal)return;mBefore.src=c.before;mAfter.src=c.after;mBefore.alt=c.title+' — قبل';mAfter.alt=c.title+' — بعد';mTitle.textContent=c.title;mEn.textContent=c.en;mNote.textContent=c.note;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('menu-open')}
  function closeModal(){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('menu-open')}
  $$('[data-modal-close]').forEach(b=>b.addEventListener('click',closeModal));
  const play=$('[data-play-video]');play?.addEventListener('click',()=>{$('.video-hero video')?.play()});
  // Prevent accidental horizontal overflow caused by media loaded at runtime.
  const guard=()=>{document.documentElement.style.overflowX='clip';document.body.style.overflowX='clip'}; guard();
})();
