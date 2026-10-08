document.addEventListener('DOMContentLoaded',()=>{
 const targets=[...document.querySelectorAll('section')];
 const seen=new WeakSet();
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting && !seen.has(entry.target)){
     seen.add(entry.target);
     entry.target.classList.add('qa-soft-enter');
     setTimeout(()=>entry.target.classList.remove('qa-soft-enter'),650);
   }
 }),{threshold:.06,rootMargin:'0px 0px -4% 0px'});
 targets.forEach(s=>io.observe(s));
});
