import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  HiMenu, 
  HiX, 
  HiHome, 
  HiBriefcase, 
  HiUser, 
  HiClock 
} from 'react-icons/hi';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(".sidebar", {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(".menu-overlay", {
        opacity: 1,
        duration: 0.3,
        pointerEvents: "auto",
      });
      // Animate menu items
      gsap.fromTo(".menu-item", 
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.3, 
          stagger: 0.1, 
          delay: 0.2,
          ease: "power2.out"
        }
      );
    } else {
      gsap.to(".sidebar", {
        x: -320,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(".menu-overlay", {
        opacity: 0,
        duration: 0.3,
        pointerEvents: "none",
      });
    }
  }, [isMenuOpen]);

  const menuItems = [
    { 
      icon: HiHome, 
      label: 'Home', 
      href: '#home',
      color: 'text-blue-400'
    },
    { 
      icon: HiBriefcase, 
      label: 'Work', 
      href: '#work',
      color: 'text-green-400'
    },
    { 
      icon: HiUser, 
      label: 'Profile', 
      href: '#profile',
      color: 'text-purple-400'
    },
    { 
      icon: HiClock, 
      label: 'Timeline', 
      href: '#timeline',
      color: 'text-orange-400'
    }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4 z-40 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button 
            onClick={toggleMenu}
            className="group p-3 hover:bg-gray-700 rounded-xl transition-all duration-300 transform hover:scale-110"
          >
            <HiMenu className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
          </button>
          
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Custom Cursor App
          </h1>
          
          <div className="w-12"></div> {/* Spacer for centering */}
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className="menu-overlay fixed inset-0 bg-black bg-opacity-60 z-30 opacity-0 pointer-events-none backdrop-blur-sm"
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className="sidebar fixed top-0 left-0 w-80 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white z-40 transform -translate-x-full shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Navigation
            </h2>
            <button 
              onClick={toggleMenu}
              className="group p-3 hover:bg-gray-700 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-90"
            >
              <HiX className="w-6 h-6 group-hover:text-red-400 transition-colors duration-300" />
            </button>
          </div>
          
          {/* Menu Items */}
          <ul className="space-y-3">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index} className="menu-item">
                  <a 
                    href={item.href} 
                    className="group flex items-center space-x-4 p-4 hover:bg-gray-700 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={`p-2 rounded-lg bg-gray-700 group-hover:bg-gray-600 transition-colors duration-300`}>
                      <IconComponent className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <span className="text-lg font-medium group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-gray-400 text-sm">
              <p>Built with ❤️ using React & GSAP</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
