import React, { useRef,useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { u } from 'framer-motion/client'

// Navigation Component
const Navbar = () => {
  return (
    <nav style={{
      width: '100%',
      backgroundColor: '#333',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className='nav' style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
        GSAP Learning
      </div>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '2rem'
      }}>
        <li><a href="#home" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Home</a></li>
        <li><a href="#animations" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Animations</a></li>
        <li><a href="#timeline" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Timeline</a></li>
        <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</a></li>
      </ul>
    </nav>
  )
}

const App = () => {
  // const gsapref=useRef();
//  useGSAP(()=>{
//   gsap.to('.box', {
//     x: 500,
//     rotation: 360, 
//     duration: 2,
//     delay: 1,
//   })
//  })



// useGSAP(()=>{
//   gsap.to(gsapref.current, {
//     x: 500,
//     rotation: 360, 
//     duration: 2,
//     delay: 1,
//   })
//  })

//  useGSAP(()=>{
//   gsap.from('.box', {
//     y: 500,
//     rotation: 720, 
//     duration: 2,
//     delay: 1,
//   })
//  })

// const boxref=useRef();
// useGSAP(()=>{
//   gsap.from(boxref.current,{
//     x: 500, 
//     rotation: 360, 
//     duration: 2, 
//     delay: 1
//   })
// })

  // useGSAP(()=>{
  //   gsap.from('.box', {
  //     rotation: 360,
  //     scale: 0,
  //     duration: 2,
  //     delay: 1,
  //     opacity: 0,
  //   })
  // },{scope: '.container'})

  useGSAP(()=>{
    gsap.from('.nav', {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 1,
    })
  })

    const container=useRef();
    useGSAP(()=>{
    gsap.from('.box', {
      rotation: 360,
      scale: 0,
      duration: 2,
      delay: 1,
      opacity: 0,
    })
  },{scope: container})

  const [Cycle, setCycle] = useState(0);
  const random=gsap.utils.random(-100, 100, true);

const {contextSafe} = useGSAP();

  const rotatebox=contextSafe(function(){
    gsap.to('.newbox', {
      rotation: 360,
      duration: 2,
    })
  })

  useGSAP(()=>{
    gsap.from(
      'h1', { 
      color: 'red',
      opacity: 0,
      duration: 2,
      delay: 1,
      y: 10,
      stagger:0.3,
      repeat:-1,
      repeatDelay: 1,
      yoyo: true,
    })
  })
  let t1=gsap.timeline()
  useGSAP(()=>{
    t1.to(
      '.box1', { 
      rotate:360,
      duration: 2,
      x: 500,
      delay: 1,
    
    })
  })
   useGSAP(()=>{
    t1.to(
      '.box2', { 
      rotate:720,
      duration: 2,
      x: 500,
      delay: 1,
    
    })
  })
   useGSAP(()=>{
    t1.to(
      '.box3', { 
      rotate:1080,
      duration: 2,
      x: 500,
      delay: 1,
    
    })
  })

  return (
    <div >
      <Navbar />
      <div style={{ marginTop: '80px', padding: '2rem' }}>
        <h1>iam Learning GSAP</h1>
        <h1>i am cool</h1>
        <h1>my name is Subrata</h1>
        <br/>
        <br/>
        <br/>
        <div  className='box1'></div>
        <div  className='box2'></div>
        <div  className='box3'></div>
        <main>
        {/* <div ref={gsapref} className='box'></div> */}
        <div ref={container} className='container'>
          <div className='circle'></div>
          <div  className='box'></div>
        </div>
        <div className='kuch'>
          <div className='circle'></div>
          <div  className='box'></div>
        </div>
        <button
        onClick={()=>{
          setCycle((prev)=>prev+1);
          gsap.to('.box', {
            x: random(),
            y: random(),
            rotation: random(360),
            duration: 2,
          })
        }}
        >Animation</button>

        <div className='newbox'></div>
        <button onClick={rotatebox}>Move</button>
        </main>
      </div>
    </div>
  )
}

export default App