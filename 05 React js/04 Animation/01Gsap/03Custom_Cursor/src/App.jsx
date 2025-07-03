import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import Easyuse from "./components/Easyuse";
import "./App.css";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });

      // Add cursor size animation on move
      gsap.to(".cursor", {
        scale: 1.2,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(".cursor", {
        scale: 1.5,
        backgroundColor: "#8b5cf6",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(".cursor", {
        scale: 1,
        backgroundColor: "#6366f1",
        duration: 0.3,
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Custom Cursor */}
      <div className="cursor h-6 w-6 rounded-full bg-indigo-500 fixed z-50 pointer-events-none shadow-lg">
        <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></div>
      </div>

      {/* Navbar */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen text-white pt-20">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-pulse">
              🎯 Interactive Experience
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Move your mouse around to see the magic!
            </p>
            <div className="text-lg font-normal text-gray-400 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="mb-2">✨ Custom cursor with hover effects</p>
              <p className="mb-2">🍔 Click the hamburger menu to explore navigation</p>
              <p>🎨 Beautiful animations powered by GSAP</p>
            </div>
          </div>

          {/* Interactive Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">🚀 Smooth Animations</h3>
              <p className="text-gray-300">Experience buttery smooth cursor tracking with GSAP</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">🎨 Modern Design</h3>
              <p className="text-gray-300">Beautiful gradients and glassmorphism effects</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold mb-3">📱 Responsive</h3>
              <p className="text-gray-300">Optimized for all screen sizes and devices</p>
            </div>
          </div>
        </div>
      </div>
      <Easyuse />
    </div>
  );
};

export default App;











