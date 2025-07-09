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
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Globe SVG */}
      <div 
        className="absolute top-1/4 left-1/2 w-96 h-96 lg:w-[600px] lg:h-[600px] opacity-40"
        style={{ 
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.3}px)) rotate(${scrollY * 0.2}deg) scale(${1 + scrollY * 0.0005})`,
          transition: 'none',
          filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.3))'
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Globe circle with glow */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            opacity="0.6"
          />
          
          {/* Digital grid pattern - Latitude lines */}
          <ellipse cx="200" cy="200" rx="180" ry="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
          <ellipse cx="200" cy="200" rx="180" ry="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
          <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
          <ellipse cx="200" cy="200" rx="180" ry="160" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
          
          {/* Digital grid pattern - Longitude lines */}
          <ellipse cx="200" cy="200" rx="40" ry="180" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
          <ellipse cx="200" cy="200" rx="80" ry="180" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
          <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
          <ellipse cx="200" cy="200" rx="160" ry="180" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
          
          {/* Digital connection lines */}
          <path d="M 60 80 Q 200 50 340 80 Q 200 200 60 320 Q 200 350 340 320 Q 200 200 60 80" 
                fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.3" />
          <path d="M 340 80 Q 200 50 60 80 Q 200 200 340 320 Q 200 350 60 320 Q 200 200 340 80" 
                fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.3" />
          
          {/* Digital nodes/cities with pulsing effect */}
          <circle cx="150" cy="120" r="4" fill="hsl(var(--primary))" opacity="0.8">
            <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="280" cy="180" r="3" fill="hsl(var(--accent))" opacity="0.7">
            <animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="280" r="3.5" fill="hsl(var(--primary))" opacity="0.9">
            <animate attributeName="r" values="3;6;3" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="100" r="3" fill="hsl(var(--accent))" opacity="0.6">
            <animate attributeName="r" values="2;5;2" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="300" r="4" fill="hsl(var(--primary))" opacity="0.8">
            <animate attributeName="r" values="3;7;3" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.2s" repeatCount="indefinite" />
          </circle>
          
          {/* Connection lines between nodes */}
          <line x1="150" y1="120" x2="280" y2="180" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="280" y1="180" x2="200" y2="300" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line x1="120" y1="280" x2="300" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
      
      {/* Additional floating elements that also rotate */}
      <div 
        className="absolute top-1/4 right-1/4 w-32 h-32 opacity-10"
        style={{ 
          transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.05}px) rotate(${scrollY * -0.15}deg)`,
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