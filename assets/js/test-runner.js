(()=>{
 const tests=[
  ['Homepage loads','Astra'],['Navigation links work','Astra'],['Skills cards render','Astra'],
  ['Projects data loads','Pixel'],['Profile API response','Hunter'],['Resume action works','Astra'],
  ['Responsive layout','Pixel'],['Contact validation','Hunter']
 ];
 const rows=document.getElementById('testRows'), log=document.getElementById('qaLogV3'), btn=document.getElementById('qaRunV3');
 const defect=document.getElementById('defectCard'), flow=document.getElementById('defectFlow'), speech=document.getElementById('qaSpeech');
 let busy=false, timer;
 function say(who,msg){if(window.qaCrewSpeak)window.qaCrewSpeak(who,msg,3200)}
 function addLog(msg,cls='info'){log.innerHTML+='<div class="'+cls+'">'+msg+'</div>';log.scrollTop=log.scrollHeight}
 function render(){rows.innerHTML=tests.map((t,i)=>'<div class="testrow" id="tr'+i+'"><span>○</span><span class="testname">'+t[0]+' <small style="color:#52677b">· '+t[1]+'</small></span><span class="status ready">READY</span></div>').join('')}
 function state(i,text,cls,icon){let r=document.getElementById('tr'+i);r.children[0].textContent=icon;r.querySelector('.status').className='status '+cls;r.querySelector('.status').textContent=text}
 function summary(p,f){document.getElementById('sPass').textContent=p;document.getElementById('sFail').textContent=f;document.getElementById('sRate').textContent=Math.round(p/8*100)+'%'}
 const wait=ms=>new Promise(r=>setTimeout(r,ms));
 async function run(){
  if(busy)return;busy=true;btn.disabled=true;btn.textContent='⏳ TESTS RUNNING';render();defect.classList.remove('show');summary(0,0);log.innerHTML='';let p=0,f=0;
  say('Pixel','Pipeline triggered. Environment is healthy.');addLog('[CI] Build #QA-208 started.','info');await wait(650);
  for(let i=0;i<tests.length;i++){
   state(i,'RUNNING','run','▶');say(tests[i][1],'Running: '+tests[i][0]);addLog('[RUN] '+tests[i][0],'info');await wait(650);
   if(i===4){
    state(i,'FAILED','fail','✕');f++;summary(p,f);addLog('[FAIL] Profile API exceeded timeout threshold.','bad');say('Hunter','I found a failure. Creating BUG-1042 and collecting evidence.');defect.classList.add('show');flow.textContent='FOUND → ANALYZE → REPRODUCE → LOG';await wait(1200);
    flow.textContent='FOUND → ANALYZE → REPRODUCE → LOG → FIX';say('Astra','Applying demo fix: retry handling + timeout correction.');addLog('[FIX] Demo API timeout handling updated.','warn');await wait(1000);
    state(i,'RETEST','retest','↻');flow.textContent+=' → RETEST';say('Hunter','Retesting BUG-1042 now.');addLog('[RETEST] Profile API response','warn');await wait(850);
    state(i,'PASSED','pass','✓');f--;p++;summary(p,f);flow.textContent+=' → CLOSED ✓';addLog('[PASS] Retest successful. BUG-1042 closed.','good');say('Hunter','Retest passed. Defect closed.');await wait(450);
   } else {
    state(i,'PASSED','pass','✓');p++;summary(p,f);addLog('[PASS] '+tests[i][0],'good');
   }
  }
  addLog('[REPORT] 8 passed, 0 failed after retest. Quality gate APPROVED.','good');say('Pixel','All checks passed after recovery. Publishing the report.');btn.disabled=false;btn.textContent='↻ RUN AGAIN';busy=false;
 }
 render();btn.addEventListener('click',run);
 document.querySelectorAll('.crewBot').forEach(b=>{b.setAttribute('role','button');b.setAttribute('tabindex','0');b.setAttribute('aria-label','Talk to '+b.dataset.bot);const speak=()=>{let n=b.dataset.bot;say(n,n==='Astra'?'I own Playwright, reusable page objects and automation reviews.':n==='Hunter'?'I reproduce defects, capture evidence and verify retests.':'I monitor builds, regression gates and release reporting.')};b.addEventListener('click',speak);b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();speak()}})});

 // Add contextual crew labels to major portfolio sections without requiring specific class names.
 const keywords=[['project','ASTRA · checking automation projects'],['skill','ASTRA · validating tech stack'],['pipeline','PIXEL · monitoring CI/CD'],['bug','HUNTER · scanning defects'],['contact','HUNTER · validating form'],['resume','PIXEL · checking artifact']];
 document.querySelectorAll('section').forEach(sec=>{const txt=(sec.id+' '+sec.className+' '+(sec.querySelector('h1,h2,h3')?.textContent||'')).toLowerCase();for(const [k,label] of keywords){if(txt.includes(k)&&!sec.querySelector('.section-crew-note')){if(getComputedStyle(sec).position==='static')sec.style.position='relative';let n=document.createElement('div');n.className='section-crew-note';n.textContent=label;sec.appendChild(n);break}}});
})();
