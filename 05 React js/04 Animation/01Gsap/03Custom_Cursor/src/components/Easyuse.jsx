import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const Easyuse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useGSAP(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-white relative">
      {/* Custom Cursor */}
      <div className="cursor h-6 w-6 rounded-full bg-black fixed z-50"></div>

      {/* Demo UI */}
      <div className="flex justify-center items-center h-full text-2xl font-bold">
        Move your mouse 👆
      </div>
    </div>
  );
};

export default Easyuse;
