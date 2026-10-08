(()=>{
 const cases=(window.PORTFOLIO_DATA||{}).caseStudies||[];
 const tabs=document.querySelector('#caseStudies .case-tabs');
 tabs.innerHTML='';
 cases.forEach((c,i)=>{const t=document.createElement('button');t.type='button';t.className='case-tab'+(i===0?' active':'');t.dataset.case=i;t.textContent=c.tab||c.title;tabs.appendChild(t)});
 const panels=document.getElementById('casePanels');
 cases.forEach((c,ci)=>{
  const el=document.createElement('article');el.className='case-panel '+(ci===0?'active':'');
  el.innerHTML=`<div class="case-title"><span>CASE STUDY 0${ci+1}</span><h3>${c.title}</h3><p>${c.sub} · ${c.intro}</p></div>
   <div class="case-flow">${c.steps.map((s,i)=>`<div class="case-step ${i===0?'active':''}" data-i="${i}"><b>0${i+1} · ${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div>
   <div class="case-detail"><b>${c.steps[0][0]}</b><p>${c.steps[0][1]}</p><div class="case-impact">${c.impact.map(x=>'<i>'+x+'</i>').join('')}</div></div>`;
  panels.appendChild(el);
  el.querySelectorAll('.case-step').forEach(step=>step.addEventListener('click',()=>{
   el.querySelectorAll('.case-step').forEach(x=>x.classList.remove('active'));step.classList.add('active');
   const s=c.steps[+step.dataset.i],d=el.querySelector('.case-detail');d.querySelector('b').textContent=s[0];d.querySelector('p').textContent=s[1];
   if(window.ANI_QA) window.ANI_QA.say('Case study: '+s[0]+'. '+s[1]);
  }));
 });
 document.querySelectorAll('.case-tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.case-tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');
  document.querySelectorAll('.case-panel').forEach((x,i)=>x.classList.toggle('active',i===+t.dataset.case));
 }));
})();
