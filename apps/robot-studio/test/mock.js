// Fake window.claude for local testing: streams canned stage documents with valid JSON blocks.
(function(){
  const FIX = {
    'production-manager:brief': {title:'Puddle Ferry', logline_seed:'A frog ferries bugs across a storm puddle.', assumptions:['16:9 delivery'], questions:[{q:'Any dialogue?', default:'Minimal'}]},
    'story-writer': {title:'Puddle Ferry', logline:'A tiny frog must ferry a ladybug home before the puddle drains.', theme:'Courage is small steps', characters:[{name:'Fen',role:'frog ferryman',want:'one last crossing'},{name:'Dot',role:'ladybug',want:'get home'}], beats:[{name:'Setup',summary:'Fen waits at the dock.'},{name:'Storm',summary:'Rain hits.'},{name:'Crossing',summary:'They push through.'},{name:'Home',summary:'Dot lands safely.'}], ending:'Fen smiles in the sun.'},
    'screenwriter': {scenes:[{id:'SC01',heading:'EXT. PUDDLE DOCK - DAY',summary:'Fen meets Dot.',characters:['Fen','Dot'],est_s:20},{id:'SC02',heading:'EXT. PUDDLE - STORM',summary:'The crossing.',characters:['Fen','Dot'],est_s:40}], total_est_s:60},
    'character-designer': {characters:[{id:'CH-FEN',name:'Fen',role:'lead',identity_lock:'small round green frog, big amber eyes, freckled back',short_lock:'small green frog',costumes:[{id:'CO-FEN-01',lock:'yellow rain hat'}],colors:['#69db7c','#fcc419'],silhouette:'round'},{id:'CH-DOT',name:'Dot',role:'passenger',identity_lock:'tiny red ladybug with seven spots',short_lock:'red ladybug',costumes:[],colors:['#e03131'],silhouette:'dome'}]},
    'production-designer': {locations:[{id:'LOC-PUDDLE',name:'The Puddle',lock:'wide brown rain puddle between cobblestones',short_lock:'rain puddle',time_of_day:'day',palette:['#8d6e63','#74c0fc']}],props:[{id:'PR-LEAF',name:'Leaf boat',lock:'curled oak leaf',states:['dry','soaked']}]},
    'visual-style-designer': {look:'Soft stylized 3D with storybook warmth.',style_lock:'stylized 3D, soft subsurface, warm rim light',palette:[{role:'hero',name:'Frog green',hex:'#69db7c'},{role:'accent',name:'Hat yellow',hex:'#fcc419'},{role:'storm',name:'Slate',hex:'#495057'}],color_script:[{scene:'SC01',hues:'warm greens',mood:'calm'},{scene:'SC02',hues:'cool slate',mood:'tense'}],avoid:['neon']},
    'film-director': {shots:[{id:'SC01-SH010',scene:'SC01',size:'WS',angle:'eye',move:'static',subject:'Fen',action:'Fen waits',duration_s:4,purpose:'establish',transition_out:'cut'},{id:'SC01-SH020',scene:'SC01',size:'MCU',angle:'low',move:'push',subject:'Dot',action:'Dot arrives',duration_s:3,purpose:'meet',transition_out:'cut'},{id:'SC02-SH010',scene:'SC02',size:'WS',angle:'high',move:'track',subject:'boat',action:'storm crossing',duration_s:5,purpose:'stakes',transition_out:'cut'}],needs_action:[],total_s:12},
    'animation-director': {style_rules:['snappy timing'],shots:[{id:'SC01-SH010',key_poses:['sit','look'],timing:'hold 1s'}]},
    'cinematographer': {setups:[{id:'L1',scene:'SC01',key:'sun left',fill:'sky',rim:'warm',practicals:'none'}],shots:[{id:'SC01-SH010',lens_mm:35,aperture:'f/4',height_m:0.1,support:'tripod',movement:'static',focus:'Fen'}]},
    'script-supervisor': {issues:[{id:'C1',severity:'MINOR',issue:'hat wet in SC02',owner:'character-designer'}],states:[{scene:'SC01',notes:'dry'}]},
    'production-manager:master': {shots:[{id:'SC01-SH010',scene:'SC01',duration_s:4,size:'WS',characters:['CH-FEN'],start_frame:'Wide shot, small round green frog...',end_frame:'Same, frog looks up',motion:'0-1 s holds; 1-4 s looks up',mode:'image-to-video',clip_length_s:5,keep:'0.5-4.5 s',dialogue:'none'}]},
    'storyboard-artist': {panels:[{id:'SB-SC01-SH010-P1',shot:'SC01-SH010',moment:'Fen waits',composition:'frog lower third',camera_note:'static',duration_s:4,dialogue:'',sketch_prompt:'frog on dock'},{id:'SB-SC01-SH020-P1',shot:'SC01-SH020',moment:'Dot lands',composition:'centered',camera_note:'push in',duration_s:3,dialogue:'Dot: Hello!',sketch_prompt:'ladybug lands'}]},
    'film-editor': {timeline:[{shot:'SC01-SH010',in_s:0,out_s:4,duration_s:4,transition:'cut',note:''},{shot:'SC01-SH020',in_s:4,out_s:7,duration_s:3,transition:'cut',note:''}],runtime_s:7,target_s:60,problems:['short']},
    'voice-director': {profiles:[{character:'Dot',voice:'bright, quick'}],lines:[{id:'VL-SC01-010',shot:'SC01-SH020',character:'Dot',line:'Hello!',delivery:'cheerful'}]},
    'music-director': {concept:'Plucky strings',cues:[{id:'M01',start:'SC01-SH010',end:'SC02',function:'theme',bpm:96,key:'D major',instrumentation:'pizzicato',prompt:'plucky strings'}]},
    'sound-designer': {ambiences:[{scene:'SC01',bed:'light rain'}],cues:[{id:'SFX-SC01-010',shot:'SC01-SH020',sound:'wing buzz',sync:'0.5 s',layer:'Foley'}]},
    'vfx-supervisor': {shots:[{id:'VFX-SC02-SH010',shot:'SC02-SH010',problem:'rain',method:'native',risk:'low',fallback:'comp'}]},
    'image-prompt-engineer': {prompts:[{id:'IMG-CH-FEN-SHEET',target:'CH-FEN',kind:'character sheet',prompt:'turnaround of a small round green frog',aspect:'16:9',references:[]}]},
    'video-prompt-engineer': {prompts:[{id:'VID-SC01-SH010',shot:'SC01-SH010',mode:'image-to-video',prompt:'0-1 s holds...',clip_length_s:5,keep:'0.5-4.5',audio:'post'}]},
    'quality-control': {verdict:'NEEDS FIXES',summary:{pass:3,fix:1,redo:0,not_verifiable:1},items:[{id:'QC-001',target:'SC01-SH010',check:'runtime',verdict:'FIX',evidence:'7 s vs 60 s',owner:'film-director',owner_stage:'direction',repair:'add shots'}]},
    'production-manager:wrap': {headline:'Ready for reference stills',ready:['character sheets'],next_steps:['generate sheets'],open_issues:[{owner:'director',issue:'runtime short'}]},
  };
  window.__calls = [];
  function stageKey(input){
    const m = input.match(/running the "([a-z-]+)" skill/);
    if (!m) return null;
    if (m[1]==='production-manager') { if (/Compile the complete/.test(input)) return 'production-manager:master'; if (/Wrap the production/.test(input)) return 'production-manager:wrap'; return 'production-manager:brief'; }
    return m[1];
  }
  async function stream(text, opts){
    const signal = opts && opts.signal;
    let acc='';
    const chunks = text.match(/[\s\S]{1,120}/g) || [text];
    for (const c of chunks){
      if (signal && signal.aborted) throw {code:'cancelled', text:acc};
      await new Promise(r=>setTimeout(r, window.__delay||15));
      acc+=c; opts && opts.onText && opts.onText({text:acc, delta:c});
    }
    return {text:acc, truncated:false, modelTierApplied:'default'};
  }
  const sample = async function(input, opts){
    window.__calls.push({input: typeof input==='string'?input:JSON.stringify(input), images: opts && opts.images ? opts.images.length : 0});
    if (window.__failNext) { window.__failNext=false; throw {code:'upstream_error', message:'fake'}; }
    if (/You build the 3D previz/.test(input)) {
      const ids = [...String(input).matchAll(/^- (SC\d+-SH\d+):/gm)].map(m=>m[1]);
      return stream(JSON.stringify({shots: ids.map((id,i)=>window.__spec(id,i))}), opts);
    }
    if (/drawing quick concept sketches as SVG/.test(input) || /Draw a quick concept sketch/.test(input)) {
      const ids = [...input.matchAll(/^- (\S+) — /gm)].map(m=>m[1]);
      const one = '```svg\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="10" y="10" width="300" height="160" fill="#e7f5ff" stroke="#333"/><circle cx="160" cy="100" r="40" fill="#69db7c" onclick="alert(1)"/><script>alert(1)<\/script><text x="20" y="30">sketch</text></svg>\n```';
      return stream(ids.length ? ids.map(i=>`### ${i}\n${one}`).join('\n') : one, opts);
    }
    const key = stageKey(String(input));
    const data = FIX[key] || {note:'generic'};
    const md = `---\nid: ${key}\nversion: 1\nstatus: REVIEW\n---\n# ${key} document\n\nSome **bold** text and a table:\n\n| a | b |\n|---|---|\n| 1 | 2 |\n\n- item one\n- ASSUMPTION: rain is light\n- OPEN-QUESTION: Should Dot talk?\n\n\`\`\`fountain\nEXT. PUDDLE - DAY\n\nFen waits.\n\`\`\`\n\nHandoff: done.\n\n\`\`\`json\n${JSON.stringify(data)}\n\`\`\`\n`;
    return stream(md, opts);
  };
  window.__spec = (id, i) => ({shot:id, duration_s:1.5, sky:['#4dabf7','#fff3bf'], ground:'#8ce99a', time: i%2?'dusk':'day', weather: i%2?'rain':'none',
    light:{color:'#fff4e0', from:'left', intensity:1.1},
    objects:[{id:'house',shape:'house',color:'#ffd8a8',pos:[-3,0,-4],size:[3,3,3]},{id:'tree',shape:'tree',color:'#2f9e44',pos:[3,0,-3],size:[1.5,4,1.5]},{id:'puddle',shape:'water',color:'#74c0fc',pos:[0,0,0],size:[6,0.1,4]},{id:'lamp',shape:'lamp',color:'#ffe066',pos:[2,0,1],size:[1,2.5,1],glow:true}],
    characters:[{id:'CH-FEN',name:'Fen',body:'blob',color:'#69db7c',accent:'#fcc419',height:0.6,hat:'cap',from:[-2,1],to:[1,1],face:'happy',action:'walk'},{id:'CH-DOT',name:'Dot',body:'human',color:'#e03131',skin:'#ffd8a8',height:1.6,hat:'bow',from:[2,0],to:[2,0],face:'talking',action:'wave'}],
    camera:{from:[0,1.6,7],to:[0,1.4,5],look:[0,0.8,0],fov:45}, caption: i===0?'Dot: Hello, ferryman!':'', title: i===0?'Puddle Ferry':''});
  sample.json = async function(input, opts){
    window.__calls.push({input, json:true});
    const t = String(input);
    if (/3D scene spec/.test(t) || /Rewrite the 3D previz scene spec/.test(t)) return window.__spec('SC01-SH010', 0);
    const msg = (t.match(/Client's new message: """([\s\S]*?)"""/)||[])[1]||'';
    if (/braver/i.test(msg)) return {reply:'On it! Making Fen braver.', actions:[{type:'change', stage:'story', text:'make Fen braver'}]};
    if (/approve|looks good/i.test(msg)) return {reply:'Approved! 🎬', actions:[{type:'approve'}]};
    if (/rain/i.test(msg)) return {reply:'Noted, more rain!', actions:[{type:'note', stage:'all', text:'more rain everywhere'}]};
    return {reply:'Beep! Noted.', actions:[]};
  };
  sample.limits = async () => ({maxPromptBytes:262144, images:{maxCount:5, maxInputBytes:2e7, mediaTypes:['image/png','image/jpeg']}, tools:{maxCount:8}});
  const downloads = { save: async (r) => { window.__saved = (window.__saved||[]).concat([{filename:r.filename, size: (r.data.length||r.data.size)}]); return {status:'saved'}; } };
  window.claude = { use: async (n) => ({sample, downloads}[n] || null) };
})();
