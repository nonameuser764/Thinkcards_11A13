(()=>{
const base=new Audio('sound/tap.mp3');base.preload='auto';
const SEL='button,a[href],[role=button],input[type=submit],.lvl,.lc,summary';
const SKIP='#pv,#sc,[data-nosound],:disabled';
let dx=0,dy=0;
function play(){try{const a=base.cloneNode();a.volume=.8;const p=a.play();if(p)p.catch(()=>{})}catch(e){}}
addEventListener('pointerdown',e=>{dx=e.clientX;dy=e.clientY},true);
addEventListener('click',e=>{
  const t=e.target.closest&&e.target.closest(SEL);if(!t||t.matches(SKIP))return;
  if(e.detail&&Math.hypot(e.clientX-dx,e.clientY-dy)>8)return; // kéo thả nhân vật thì không kêu
  play();
  // chuyển trang cùng tab: chờ một chút để nghe hết tiếng
  if(t.tagName=='A'&&!e.defaultPrevented&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&e.button===0){
    const h=t.getAttribute('href')||'';
    if(t.target!='_blank'&&!t.hasAttribute('download')&&h&&h[0]!='#'&&!/^(mailto:|tel:|javascript:)/i.test(h)){
      e.preventDefault();setTimeout(()=>{location.href=t.href},170);
    }
  }
},true);
})();
