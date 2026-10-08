(()=>{
 const ani=document.getElementById('aniLead'),bubble=document.getElementById('crewSpeech'),
       bn=document.getElementById('crewSpeechName'),bt=document.getElementById('crewSpeechText');
 if(!ani)return;

 // IMPORTANT: locate the ORIGINAL v3 Astra/Hunter/Pixel instead of creating replacements.
 function findCrew(name){
   const index={Astra:0,Hunter:1,Pixel:2}[name];
   return document.querySelector('#qaCrewDock .crewBot[data-bot="'+name+'"]') || document.querySelectorAll('#characters .character .char')[index] || null;
 }
 const crew={Ani:ani,Astra:findCrew('Astra'),Hunter:findCrew('Hunter'),Pixel:findCrew('Pixel')};

 // Mark original crew elements so we can move them slightly and restore them.
 ['Astra','Hunter','Pixel'].forEach(n=>{
   const e=crew[n];if(!e)return;
   e.dataset.qaOriginal='true';
   e.style.transition=(e.style.transition?e.style.transition+', ':'')+'transform .65s ease';
   e.style.willChange='transform';
 });

 let hide=0,busy=false,ambient=0;
 window.qaCrewSpeak=(who,msg,ms=3000)=>{busy=true;clearTimeout(ambient);anchorBubble(who,msg,ms);clearTimeout(window.qaCrewResumeTimer);window.qaCrewResumeTimer=setTimeout(()=>{busy=false;schedule()},ms+300)};
 const wait=n=>new Promise(r=>setTimeout(r,n));

 function anchorBubble(who,msg,ms=2600){
   const e=crew[who]||ani,r=e.getBoundingClientRect();
   if(who!=='Ani' && (r.bottom<0 || r.top>innerHeight)) return anchorBubble('Ani','Team update: '+msg,ms);
   bn.textContent=who.toUpperCase();bt.textContent=msg;
   const color=who==='Astra'?'#a383ff':who==='Hunter'?'#ffc05d':who==='Pixel'?'#59ff9a':'#59e8ff';
   bubble.style.setProperty('--bubble-color',color);
   bubble.style.borderColor=color;
   // Measure the bubble first, then center it over the active speaker.
   bubble.style.visibility='hidden';bubble.classList.add('show');
   const br=bubble.getBoundingClientRect(), center=r.left+r.width/2;
   let left=center-br.width/2;
   left=Math.max(10,Math.min(innerWidth-br.width-10,left));
   let top=r.top-br.height-18;
   // If there is not enough room above, place it to the upper side of the speaker.
   if(top<10) top=Math.min(innerHeight-br.height-10,r.bottom+12);
   const tail=Math.max(14,Math.min(br.width-22,center-left-6));
   bubble.style.left=left+'px';bubble.style.top=top+'px';bubble.style.setProperty('--tail',tail+'px');
   bubble.style.visibility='visible';
   clearTimeout(hide);hide=setTimeout(()=>bubble.classList.remove('show'),ms);
 }
 function aniMove(percent){
   ani.classList.add('walk');ani.style.left=Math.max(2,Math.min(92,percent))+'%';
   setTimeout(()=>ani.classList.remove('walk'),1200);
 }
 function nudge(who,x){
   const e=crew[who];if(!e)return;
   e.style.transform=`translateX(${x}px) translateY(-3px)`;
   setTimeout(()=>e.style.transform='',2300);
 }
 function think(msg){ani.classList.add('think');anchorBubble('Ani',msg,2300);setTimeout(()=>ani.classList.remove('think'),2500)}
 async function exchange(a,am,b,bm){
   nudge(a,a==='Astra'?10:a==='Pixel'?-10:7);await wait(500);anchorBubble(a,am,2100);await wait(2250);
   nudge(b,b==='Astra'?10:b==='Pixel'?-10:-7);anchorBubble(b,bm,2200);await wait(2350);
 }
 function schedule(){
   clearTimeout(ambient);ambient=setTimeout(async()=>{
     if(!busy){
       const scenes=[
        ()=>exchange('Astra','Hunter, UI checks are ready. Please cover the negative paths.','Hunter','Got it. I will reproduce and document anything suspicious.'),
        ()=>exchange('Pixel','Astra, CI/CD is healthy and the regression slot is ready.','Astra','Perfect. I will hand over after smoke validation.'),
        async()=>{think('Reviewing coverage and risk before the next execution...');await wait(2500);anchorBubble('Hunter','I am checking the previous failure pattern too.',2200)},
        ()=>exchange('Hunter','Pixel, the defect is verified. Can you prepare the retest run?','Pixel','Yes. I will trigger regression after the corrected build arrives.')
       ];
       await scenes[Math.floor(Math.random()*scenes.length)]();
     }
     schedule();
   },9500+Math.random()*6500)
 }
 schedule();
 setTimeout(()=>anchorBubble('Ani',"I'm Ani, the QA Lead. I'll coordinate the existing QA crew while you explore.",3800),900);

 // Automation Lab uses the original crew visually; no duplicate crew is created.
 const lab=document.getElementById('labRun');
 lab?.addEventListener('click',async()=>{
   if(busy)return;busy=true;clearTimeout(ambient);
   aniMove(12);await wait(1300);anchorBubble('Ani','Team, begin with requirements and risk analysis.',2300);
   await wait(2400);nudge('Astra',12);anchorBubble('Astra','I will prepare the UI automation and reusable checks.',2200);
   await wait(2350);nudge('Hunter',10);anchorBubble('Hunter','I will validate API behavior and investigate failures.',2200);
   await wait(2350);nudge('Pixel',-12);anchorBubble('Pixel','I will monitor CI/CD, regression and reporting.',2200);
   await wait(2350);think('I will keep the quality gate blocked until defect verification and retest are complete.');
   await wait(2700);busy=false;schedule();
 });

 const portfolioRun=document.getElementById('runTests');
 portfolioRun?.addEventListener('click',()=>{
   busy=true;clearTimeout(ambient);aniMove(18);
   // Give the existing crew extra breathing room during live execution.
   if(crew.Astra) crew.Astra.style.transform='translateX(-22px)';
   if(crew.Hunter) crew.Hunter.style.transform='translateX(0px)';
   if(crew.Pixel) crew.Pixel.style.transform='translateX(22px)';
   setTimeout(()=>anchorBubble('Ani','Astra, start the automated portfolio checks.'),1100);
   setTimeout(()=>{nudge('Astra',12);anchorBubble('Astra','Automation started. I am validating the UI flow.')},3600);
   setTimeout(()=>{nudge('Hunter',9);anchorBubble('Hunter','I found a failure. Reproducing it and collecting evidence.')},6500);
   setTimeout(()=>think('Failure confirmed. Quality gate remains blocked until the fix is retested.'),9100);
   setTimeout(()=>{nudge('Pixel',-12);anchorBubble('Pixel','Corrected build received. Starting regression and retest.')},11700);
   setTimeout(()=>{
     anchorBubble('Ani','Retest verified. Good work team — quality gate can now pass.',3200);
     setTimeout(()=>{if(crew.Astra)crew.Astra.style.transform='';if(crew.Hunter)crew.Hunter.style.transform='';if(crew.Pixel)crew.Pixel.style.transform=''},3400);
     busy=false;schedule()
   },14500);
 });
})();
