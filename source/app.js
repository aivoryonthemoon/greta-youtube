(() => {
 const dialog=document.querySelector('#cinema'),player=document.querySelector('#player'),fallback=document.querySelector('#youtube-fallback');
 const allowed=new Set(['a9SzGjrahuk','yYw_cT55nt8','cq5n-ahc93Q']);let trigger;
 document.querySelectorAll('[data-video]').forEach(button=>button.addEventListener('click',()=>{
  const id=button.dataset.video;if(!allowed.has(id))return;trigger=button;
  const frame=document.createElement('iframe');frame.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;frame.title='Video di Greta De Santi su YouTube';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';player.replaceChildren(frame);fallback.href=`https://www.youtube.com/watch?v=${id}`;dialog.showModal();document.body.classList.add('modal-open');
 }));
 document.querySelector('#close-cinema').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{player.replaceChildren();document.body.classList.remove('modal-open');trigger?.focus();});
 document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('[data-place]').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.place!==button.dataset.filter);
 }));
})();
requestAnimationFrame(() => {
 const primary=document.querySelector('.hero-copy .cta-island')||document.querySelector('#telegram-main'),sticky=document.querySelector('.telegram-sticky');
 if(!primary||!sticky||!('IntersectionObserver' in window))return;
 const mobile=matchMedia('(max-width:800px)');let passed=false;
 const update=()=>{sticky.hidden=!(mobile.matches&&passed);};
 new IntersectionObserver(([entry])=>{passed=!entry.isIntersecting&&entry.boundingClientRect.bottom<=0;update();},{threshold:0}).observe(primary);
 mobile.addEventListener('change',update);
});
