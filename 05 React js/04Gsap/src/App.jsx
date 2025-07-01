import './App.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);
function App() {
  
  const gsapRef=useRef();

  useGSAP(()=>{
    gsap.to(gsapRef.current,{
      x:300,
      delay:1,
      duration:4,
      rotate:5860,

    })
  })
  return (
    <>
      <div ref={gsapRef} className='box h-30 w-30 text-center bg-blue-500 m-5 p-4'>G</div>
    </>
  )
}

export default App
