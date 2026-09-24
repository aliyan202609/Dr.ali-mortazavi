(()=>{const p=document.querySelector(".scroll-progress"),h=document.querySelector("[data-header]");const update=()=>{const m=document.documentElement.scrollHeight-innerHeight;if(p)p.style.width=(m?scrollY/m*100:0)+"%";if(h)h.classList.toggle("is-scrolled",scrollY>24)};addEventListener("scroll",update,{passive:true});update();document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const el=document.querySelector(a.getAttribute("href"));if(!el)return;e.preventDefault();el.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"})}));document.querySelectorAll(".backdrop,.close").forEach(x=>x.addEventListener("click",()=>{document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"));document.body.classList.remove("modal-lock")}));addEventListener("keydown",e=>{if(e.key==="Escape"){document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"));document.body.classList.remove("modal-lock")}})})();
/* Premium persistent light/dark theme */
(()=>{
  const root=document.documentElement;
  const key="dr-ali-theme";
  const buttons=[...document.querySelectorAll("[data-theme-toggle]")];
  const media=matchMedia("(prefers-color-scheme: dark)");
  const getTheme=()=>{try{return localStorage.getItem(key)|| (media.matches?"dark":"light")}catch(e){return media.matches?"dark":"light"}};
  const apply=(theme,save=true)=>{
    root.dataset.theme=theme;
    root.style.colorScheme=theme;
    buttons.forEach(btn=>{
      const light=theme==="light";
      btn.setAttribute("aria-pressed",String(light));
      btn.setAttribute("aria-label",light?"تغییر به حالت تاریک":"تغییر به حالت روشن");
      btn.title=light?"حالت تاریک":"حالت روشن";
    });
    document.querySelectorAll('meta[name="theme-color"]').forEach(m=>m.setAttribute("content",theme==="light"?"#f7f8f6":(document.body.classList.contains("ivory")?"#0f151c":"#07111f")));
    if(save){try{localStorage.setItem(key,theme)}catch(e){}}
  };
  apply(getTheme(),false);
  buttons.forEach(btn=>btn.addEventListener("click",()=>apply(root.dataset.theme==="light"?"dark":"light")));
  media.addEventListener?.("change",()=>{try{if(!localStorage.getItem(key))apply(media.matches?"dark":"light",false)}catch(e){}});
})();
