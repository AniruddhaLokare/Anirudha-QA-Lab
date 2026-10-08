window.addEventListener('DOMContentLoaded',()=>{
 const d=window.PORTFOLIO_DATA;if(!d)return;
 const ag=document.getElementById('achievementGrid');
 (d.achievements||[]).slice(0,6).forEach((x,i)=>ag.insertAdjacentHTML('beforeend','<div><b>IMPACT '+String(i+1).padStart(2,'0')+'</b>'+x+'</div>'));
 const et=document.getElementById('experienceTimeline');
 (d.experience||[]).forEach(e=>et.insertAdjacentHTML('beforeend',`<article class="exp-card"><div class="exp-top"><h3>${e.role} · ${e.company}</h3><span>${e.period}</span></div><div class="exp-domain">${e.domain}</div><div class="exp-tools">${e.tools.map(t=>'<i>'+t+'</i>').join('')}</div><ul>${e.highlights.map(h=>'<li>'+h+'</li>').join('')}</ul></article>`));
 const ed=document.getElementById('educationMini');
 (d.education||[]).forEach(e=>ed.insertAdjacentHTML('beforeend',`<div><b>${e.qualification} · ${e.year}</b><span>${e.institute} · ${e.result}</span></div>`));
});
