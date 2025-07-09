import { useEffect, useState } from "react";

const ScrollingGlobe = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Globe SVG */}
      <div 
        className="absolute top-1/2 left-1/2 w-96 h-96 lg:w-[600px] lg:h-[600px] transform -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{ 
          transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)`,
          transition: 'none'
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Globe circle */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            opacity="0.3"
          />
          
          {/* Latitude lines */}
          <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
          <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
          
          {/* Longitude lines */}
          <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
          <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
          
          {/* Additional curved longitude lines for 3D effect */}
          <path d="M 80 50 Q 200 20 320 50 Q 200 200 80 350 Q 200 380 320 350 Q 200 200 80 50" 
                fill="none" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.15" />
          <path d="M 320 50 Q 200 20 80 50 Q 200 200 320 350 Q 200 380 80 350 Q 200 200 320 50" 
                fill="none" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.15" />
          
          {/* Dots representing continents/cities */}
          <circle cx="150" cy="120" r="3" fill="hsl(var(--primary))" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="280" cy="180" r="2" fill="hsl(var(--accent))" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="280" r="2.5" fill="hsl(var(--primary))" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="100" r="2" fill="hsl(var(--accent))" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="300" r="3" fill="hsl(var(--primary))" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      
      {/* Additional floating elements that also rotate */}
      <div 
        className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5"
        style={{ 
          transform: `rotate(${scrollY * -0.05}deg)`,
          transition: 'none'
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollingGlobe;