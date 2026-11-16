import React, { Suspense, lazy, Component } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, MotionConfig, animate } from 'motion/react';
import { Button } from './components/ui/button';
import './enhancements.css';
const FadeContent=lazy(()=>import('./components/react-bits/FadeContent'));
const Scene=lazy(()=>import('./Scene'));
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const telegram='https://t.me/+do8kQuhcsBUzNTc8';
// Small React islands preserve the original page and working links without JS.
for(const anchor of document.querySelectorAll('a.primary')){
 const host=document.createElement('span');host.className='cta-island';
 const label=anchor.textContent;const id=anchor.id;anchor.replaceWith(host);
 createRoot(host).render(<MotionConfig reducedMotion="user"><motion.span className="cta-motion" whileTap={{scale:.97}} whileHover={{y:-2}}><Button asChild><a id={id||undefined} href={telegram} target="_blank" rel="noopener noreferrer">{label}</a></Button></motion.span></MotionConfig>);
}
const intro=document.querySelector('.intro > div');
if(intro){const html=intro.innerHTML;createRoot(intro).render(<Suspense fallback={<div dangerouslySetInnerHTML={{__html:html}}/>}><FadeContent duration={.8} initialOpacity={.35}><div dangerouslySetInnerHTML={{__html:html}}/></FadeContent></Suspense>);}
if(!reduced){
 animate('.hero-label',{opacity:[0,1],y:[8,0]},{duration:.7});
 animate('.hero-copy h1',{opacity:[.4,1],y:[16,0]},{duration:1,ease:'easeOut'});
}
class SceneBoundary extends Component{state={failed:false};static getDerivedStateFromError(){return {failed:true};}render(){return this.state.failed?<div className="scene-fallback"/>:this.props.children;}}
const host=document.querySelector('.scene-island');
if(host && !reduced && !navigator.connection?.saveData){
 const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)return;observer.disconnect();createRoot(host).render(<SceneBoundary><Suspense fallback={<div className="scene-fallback"/>}><Scene/></Suspense></SceneBoundary>);},{rootMargin:'100px'});observer.observe(host);
}
// Existing native video dialog and filters stay independent from React.
import '../app.js';
