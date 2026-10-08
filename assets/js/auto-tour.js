/* Recording-only guided portfolio tour. Activate with ?tour=1. */
(() => {
  if (new URLSearchParams(location.search).get('tour') !== '1') return;
  const stages = [
    {name:'Welcome to Aniruddha QA Lab',selector:'.hero',duration:5200},
    {name:'About the Engineer',selector:'#about',duration:5000},
    {name:'Experience & Impact',selector:'#experience',duration:7500},
    {name:'Interactive QA Case Studies',selector:'#caseStudies',duration:9500},
    {name:'Automation Toolkit',selector:'#skills',duration:5500},
    {name:'CI/CD Pipeline',find:'04 / CI/CD',duration:6500},
    {name:'Meet the QA Crew',selector:'#characters',duration:8500},
    {name:'Featured Projects',selector:'#projects',duration:6500},
    {name:'Framework Architecture',selector:'#framework',duration:6500},
    {name:'Defect Lifecycle',find:'08 / DEFECT LIFECYCLE',duration:6500},
    {name:'Interactive Automation Lab',selector:'#automationLab',duration:9000},
    {name:'Interactive Test Simulation (Demo)',selector:'#realTestingLab',duration:7500},
    {name:'Connect & Download Resume',selector:'#contact',duration:6500}
  ];
  const findStage = s => s.selector ? document.querySelector(s.selector) :
    [...document.querySelectorAll('main section')].find(el=>el.textContent.includes(s.find));
  const steps=stages.map(s=>({...s,element:findStage(s)})).filter(s=>s.element&&s.element.getClientRects().length);
  if(!steps.length)return;
  let index=0,playing=false,timer=null,started=0,remaining=0,highlight=null;
  const panel=document.createElement('aside');
  panel.id='qaTourPanel';panel.setAttribute('aria-label','Portfolio recording tour controls');
  panel.innerHTML=`<div class="tour-row"><span class="tour-caption" id="tourTitle"></span><span id="tourCount"></span></div>
  <div class="tour-row" style="margin-top:9px">
  <button type="button" id="tourPrev">◀ Back</button>
  <button type="button" id="tourPlay">▶ Start Tour</button>
  <button type="button" id="tourNext">Next ▶</button>
  <label>Speed <select id="tourSpeed"><option value="1">Normal</option><option value=".75">Fast</option><option value="1.5">Slow</option></select></label>
  <button type="button" id="tourHide">Hide controls</button>
  </div><div class="tour-progress"><span id="tourProgress"></span></div>
  <div class="tour-help">Space: pause/play · ←/→: previous/next · H: hide/show controls · Esc: exit tour</div>`;
  document.body.append(panel);
  const $=id=>panel.querySelector('#'+id),speed=$('tourSpeed'),play=$('tourPlay');
  const clear=()=>{if(timer)clearTimeout(timer);timer=null;};
  const schedule=()=>{clear();started=Date.now();timer=setTimeout(()=>{
    if(index===steps.length-1){playing=false;play.textContent='↻ Replay';clear();return;}
    index++;show();
  },remaining);};
  const show=()=>{
    clear();if(highlight)highlight.classList.remove('qa-tour-highlight');
    const step=steps[index];highlight=step.element;highlight.classList.add('qa-tour-highlight');
    $('tourTitle').textContent=step.name;$('tourCount').textContent=`${index+1} / ${steps.length}`;
    $('tourProgress').style.width=`${100*(index+1)/steps.length}%`;
    const top=step.element.getBoundingClientRect().top+scrollY-72;
    window.scrollTo({top:Math.max(0,top),behavior:'instant'});
    remaining=step.duration*Number(speed.value);
    if(playing)schedule();
  };
  const setPlaying=on=>{
    playing=on;play.textContent=on?'Ⅱ Pause':'▶ Resume';
    if(on){if(index===steps.length-1){index=0;show();}else schedule();}
    else if(timer){remaining=Math.max(1000,remaining-(Date.now()-started));clear();}
  };
  const move=delta=>{index=Math.max(0,Math.min(steps.length-1,index+delta));show();};
  $('tourPrev').onclick=()=>move(-1);$('tourNext').onclick=()=>move(1);
  play.onclick=()=>setPlaying(!playing);speed.onchange=()=>show();
  $('tourHide').onclick=()=>{panel.style.visibility='hidden';};
  document.addEventListener('keydown',event=>{
    if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;
    if(event.key==='h'||event.key==='H'){panel.style.visibility=panel.style.visibility==='hidden'?'visible':'hidden';return;}
    if(event.key==='Escape'){setPlaying(false);panel.remove();document.body.classList.remove('qa-tour-active');if(highlight)highlight.classList.remove('qa-tour-highlight');return;}
    if(event.key===' '||event.key==='ArrowLeft'||event.key==='ArrowRight'){
      event.preventDefault();if(event.key===' ')setPlaying(!playing);else move(event.key==='ArrowLeft'?-1:1);
    }
  });
  document.body.classList.add('qa-tour-active');show();
})();