import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Register the plugin once
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    // Page 1 box animation
    gsap.from("#page1 .box", {
     scale: 0,
      rotate: 720,
      delay:1,
      duration: 2,
    });
  },);

  // Page 2 h1 animation (scrolls left while pinning)
  useGSAP(() => {
    gsap.to("#page2 h1", {
    transform: "translateX(-80%)",
    scrollTrigger:{
      trigger: "#page2",
      scroller: "main",
      markers: true,
      start: "top 0%",
      end:"top -100%",
      pin: true,
      scrub:2,
    }

  })
});

    // Page 3 box animation
    useGSAP(() => {
    gsap.from("#page3 #box3", {
      scale: 0,
      rotate: 1080,
      duration: 2,
      scrollTrigger: {
        trigger: "#page3 #box3",
        scroller:"main",
        markers: true,
        start: "top 90%",
        scrub:2,
        pin: true,
      }
      
    });
  });

  return (
    <main>
      <div id="page1" className="page page1">
        <div className="box"></div>
      </div>
      <div id="page2" className="page page2">
        <h1>Expression</h1>
      </div>
      <div id="page3" className="page page3">
        <div id="box3"></div>
      </div>
    </main>
  );
}

export default App;
