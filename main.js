const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$$('.hero h1').forEach(h=>{let i=0;h.innerHTML=h.innerHTML.replace(/(<[^>]+>)|([^\s<]+)/g,(m,t,w)=>t?m:`<span style="animation-delay:${(i++)*.12+.2}s">${w}</span>`).replace(/\s+/g,' ')});
$('#menu')?.addEventListener('click',()=>$('nav').classList.toggle('open'));
const h=$('.hero');h?.addEventListener('mousemove',e=>{h.style.setProperty('--mx',e.clientX+'px');h.style.setProperty('--my',e.clientY+'px')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');const n=e.target.dataset.n;if(n){const end=+n,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1600,1);e.target.firstChild.textContent=Math.round(end*(1-Math.pow(1-p,3))).toLocaleString('ru');if(p<1)requestAnimationFrame(f)})(t0)}io.unobserve(e.target)}),{threshold:.3});
$$('.rv,[data-n]').forEach(el=>io.observe(el));
$('form')?.addEventListener('submit',e=>{e.preventDefault();const b=$('button',e.target);b.textContent='Yuborildi! Tez orada bog‘lanamiz';b.disabled=true});
