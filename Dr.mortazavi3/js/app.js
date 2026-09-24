(() => {
  const D = window.DR_DATA;
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  document.body.insertAdjacentHTML('afterbegin', `
    <a class="skip" href="#main">پرش به محتوای اصلی</a>
    <header class="header" id="header">
      <div class="container header__bar">
        <a class="brand" href="index.html" aria-label="صفحه اصلی دکتر علی مرتضوی">
          <span class="brand__mark">AM</span><span class="brand__text"><strong>دکتر علی مرتضوی</strong><span>MAXILLOFACIAL · RHINOPLASTY · DENTAL</span></span>
        </a>
        <nav class="nav" aria-label="ناوبری اصلی">
          <a href="index.html">خانه</a><a href="index.html#about">پزشک</a><a href="index.html#services">تخصص‌ها</a><a href="cases.html">نمونه‌کارها</a><a href="videos.html">ویدیوها</a><a href="magazine.html">مجله</a><a href="index.html#contact">مطب</a>
        </nav>
        <div class="header__actions"><a class="btn btn--dark header__cta" href="index.html#contact">درخواست مشاوره</a><button class="menu-toggle" id="menuToggle" aria-label="باز کردن منوی سایت" aria-expanded="false" aria-controls="drawer"><i></i></button></div>
      </div>
    </header>
    <aside class="drawer" id="drawer" aria-hidden="true"><div class="drawer__scrim" data-close-menu></div><div class="drawer__panel" role="dialog" aria-modal="true" aria-label="منوی سایت">
      <div class="drawer__head"><div class="brand"><span class="brand__mark">AM</span><span class="brand__text"><strong>دکتر علی مرتضوی</strong><span>MEDICAL EXPERIENCE</span></span></div><button class="drawer__close" data-close-menu aria-label="بستن منو">×</button></div>
      <nav aria-label="منوی موبایل"><a href="index.html">خانه<small>HOME</small></a><a href="index.html#about">درباره پزشک<small>DOCTOR</small></a><a href="index.html#services">تخصص‌ها<small>SPECIALTIES</small></a><a href="cases.html">نمونه‌کارها<small>CASE STUDIES</small></a><a href="videos.html">گالری ویدیو<small>VIDEO LIBRARY</small></a><a href="magazine.html">مجله<small>MAGAZINE</small></a><a href="index.html#contact">مطب و تماس<small>CLINIC & CONTACT</small></a></nav>
      <div class="drawer__foot"><a class="btn btn--dark" href="index.html#contact" data-close-menu>درخواست مشاوره <span>↗</span></a></div>
    </div></aside>
  `);
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer"><div class="container"><div class="footer__grid"><div><div class="brand"><span class="brand__mark">AM</span><span class="brand__text"><strong>دکتر علی مرتضوی</strong><span>MEDICAL EXPERIENCE</span></span></div><p>طراحی پرمیوم پزشکی با معماری آماده اتصال به Django CMS.</p></div><div><h3>دسترسی سریع</h3><nav><a href="index.html#about">درباره پزشک</a><a href="cases.html">نمونه‌کارها</a><a href="videos.html">ویدیوها</a><a href="magazine.html">مجله</a></nav></div><div><h3>خدمات</h3><nav><a href="index.html#services">جراحی بینی</a><a href="index.html#services">فک و صورت</a><a href="index.html#services">دندانپزشکی</a><a href="index.html#services">آموزش بیمار</a></nav></div><div><h3>مطب</h3><p>${D.doctor.city}<br>${D.doctor.address}<br>${D.doctor.phone}</p></div></div><div class="footer__bottom"><span>© ${new Date().getFullYear()} Dr. Ali Mortazavi</span><span>محتوای پزشکی نهایی باید توسط پزشک تأیید و از CMS مدیریت شود.</span></div></div></footer>
  `);

  const toggle = $('#menuToggle'), drawer = $('#drawer');
  const closeMenu = () => { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden','true'); toggle.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open'); };
  const openMenu = () => { drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden','false'); toggle.setAttribute('aria-expanded','true'); document.body.classList.add('menu-open'); setTimeout(()=>$('.drawer__close')?.focus(),50); };
  toggle.addEventListener('click', ()=> toggle.getAttribute('aria-expanded')==='true' ? closeMenu() : openMenu());
  $$('[data-close-menu]').forEach(x=>x.addEventListener('click', closeMenu));
  $$('.drawer a').forEach(a=>a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e=>{if(e.key==='Escape') closeMenu();});
  window.addEventListener('resize', ()=>{ if(innerWidth>900) closeMenu(); });

  const header = $('#header');
  const onScroll = ()=> header.classList.toggle('is-scrolled', scrollY>20);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  const renderCases = root => { if(!root) return; root.innerHTML = D.cases.map(c=>`<article class="case reveal"><div class="case__media"><img src="${c.before}" alt="تصویر نمایشی قبل از درمان" loading="lazy"><img class="case__after" src="${c.after}" alt="تصویر نمایشی بعد از درمان" loading="lazy"><div class="case__labels"><span class="pill">DEMO</span><span class="pill">BEFORE → AFTER</span></div></div><div class="case__body"><h3>${c.title}</h3><p>${c.en}</p><p class="case__note">${c.note}</p><button class="case__switch" data-case="${c.id}">نمایش بعد از درمان</button></div></article>`).join('');
    $$('[data-case]', root).forEach(btn=>btn.addEventListener('click',()=>{const card=btn.closest('.case'); const active=card.classList.toggle('is-after'); btn.textContent=active?'نمایش قبل از درمان':'نمایش بعد از درمان';}));
  };
  const renderVideos = root => { if(!root) return; root.innerHTML=D.videos.map((v,i)=>`<article class="video-card reveal"><div class="video-card__image"><img src="${v.image}" alt="" loading="lazy"><button class="video-card__play" data-video-index="${i}" aria-label="پخش ${v.title}">▶</button></div><div class="video-card__body"><small>${v.meta}</small><h3>${v.title}</h3></div></article>`).join(''); $$('[data-video-index]',root).forEach(b=>b.addEventListener('click',()=>openVideo(+b.dataset.videoIndex))); };
  const renderArticles = root => { if(!root) return; root.innerHTML=D.articles.map(a=>`<article class="article reveal"><small>${a.cat}</small><h3>${a.title}</h3><p>${a.text}</p><a href="magazine.html">ادامه مطلب ↗</a></article>`).join(''); };
  renderCases($('[data-case-grid]')); renderVideos($('[data-video-grid]')); renderArticles($('[data-article-grid]'));

  const modal = document.createElement('div'); modal.className='modal'; modal.id='globalModal'; document.body.appendChild(modal);
  const closeModal=()=>{modal.classList.remove('is-open');modal.innerHTML='';document.body.style.overflow='';};
  modal.addEventListener('click',e=>{if(e.target===modal || e.target.closest('[data-modal-close]'))closeModal()});
  function openVideo(i){const v=D.videos[i]; modal.innerHTML=`<div class="modal__box"><button class="modal__close" data-modal-close aria-label="بستن">×</button><div class="eyebrow">${v.meta}</div><h2>${v.title}</h2>${v.src?`<video controls playsinline preload="metadata" poster="${v.image}" style="width:100%;border-radius:22px;margin-top:18px"><source src="${v.src}" type="video/mp4"></video>`:`<div style="margin-top:18px;border-radius:22px;overflow:hidden"><img src="${v.image}" alt="" style="width:100%;aspect-ratio:16/9;object-fit:cover"></div><p>این کارت در نسخه فرانت‌اند نمونه است؛ ویدیوی واقعی بعداً از Media Library و Django CMS خوانده می‌شود.</p>`}</div>`;modal.classList.add('is-open');document.body.style.overflow='hidden';}

  const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.12});
  $$('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i*35,220)}ms`;observer.observe(el)});

  // page-aware current nav
  const path=location.pathname.split('/').pop()||'index.html';
  $$('.nav a').forEach(a=>{if(a.getAttribute('href')===path)a.setAttribute('aria-current','page')});
})();
