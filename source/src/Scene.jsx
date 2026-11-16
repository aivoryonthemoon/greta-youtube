import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
function Ribbon(){
 const mesh = useRef();
 useFrame((state, delta) => {
  if (!mesh.current) return;
  mesh.current.rotation.y += Math.min(delta, .05) * .12;
  mesh.current.rotation.z = -.45 + Math.sin(state.clock.elapsedTime * .25) * .08;
 });
 return <group rotation={[.7, 0, -.45]}><mesh ref={mesh}><torusGeometry args={[1.7,.065,12,96]}/><meshStandardMaterial color="#ff8fff" metalness={.7} roughness={.24}/></mesh><mesh rotation={[.4,.5,.1]}><torusGeometry args={[1.5,.025,8,80]}/><meshStandardMaterial color="#ffffff" metalness={.6} roughness={.3}/></mesh></group>;
}
export default function Scene(){
 const [active, setActive] = useState(!document.hidden);
 useEffect(()=>{
  const el=document.querySelector('.scene-island');let visible=true;
  const update=()=>setActive(visible && !document.hidden);
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update();});
  observer.observe(el);document.addEventListener('visibilitychange',update);
  return ()=>{observer.disconnect();document.removeEventListener('visibilitychange',update);};
 },[]);
 return <Canvas dpr={[1,1.25]} frameloop={active?'always':'never'} camera={{position:[0,0,5],fov:45}} gl={{alpha:true,antialias:false,powerPreference:'low-power'}} fallback={<div className="scene-fallback"/>}><ambientLight intensity={1.8}/><directionalLight position={[2,4,4]} intensity={4}/><Ribbon/></Canvas>;
}
