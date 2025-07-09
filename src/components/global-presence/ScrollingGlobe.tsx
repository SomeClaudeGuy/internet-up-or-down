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
      {/* Main Globe Container */}
      <div 
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          transform: `translate(-50%, -50%) translateY(${scrollY * -0.3}px) scale(${1 + scrollY * 0.0005})`,
        }}
      >
        {/* Globe Sphere */}
        <div className="relative w-96 h-96">
          {/* Main globe with gradient background */}
          <div 
            className="w-full h-full rounded-full relative overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, hsl(var(--primary)) 0%, hsl(var(--primary)/0.8) 25%, hsl(var(--primary)/0.4) 50%, transparent 70%),
                radial-gradient(circle at 70% 70%, hsl(var(--accent)) 0%, hsl(var(--accent)/0.6) 30%, transparent 60%),
                linear-gradient(135deg, hsl(var(--primary)/0.3) 0%, hsl(var(--primary)/0.1) 50%, hsl(var(--accent)/0.2) 100%)
              `,
              boxShadow: `
                inset -20px -20px 60px hsl(var(--primary)/0.3),
                inset 20px 20px 60px hsl(var(--accent)/0.2),
                0 0 100px hsl(var(--primary)/0.4)
              `,
              transform: `rotateY(${scrollY * 0.1}deg) rotateX(${Math.sin(scrollY * 0.001) * 10}deg)`
            }}
          >
            {/* Continents overlay */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                background: `
                  radial-gradient(ellipse 40px 20px at 25% 35%, hsl(var(--accent)) 40%, transparent 50%),
                  radial-gradient(ellipse 60px 30px at 70% 25%, hsl(var(--accent)) 40%, transparent 50%),
                  radial-gradient(ellipse 35px 25px at 20% 70%, hsl(var(--accent)) 40%, transparent 50%),
                  radial-gradient(ellipse 50px 20px at 75% 65%, hsl(var(--accent)) 40%, transparent 50%)
                `
              }}
            />
            
            {/* Grid lines */}
            <div className="absolute inset-0">
              {/* Longitude lines */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`long-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                  style={{ left: `${(i + 1) * 12.5}%` }}
                />
              ))}
              {/* Latitude lines */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`lat-${i}`}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                  style={{ top: `${(i + 1) * 16.67}%` }}
                />
              ))}
            </div>
          </div>

          {/* Atmosphere glow */}
          <div 
            className="absolute inset-[-20px] rounded-full"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary)/0.2) 0%, hsl(var(--primary)/0.1) 30%, transparent 70%)`,
              filter: 'blur(20px)'
            }}
          />

          {/* City markers */}
          {[
            { top: '35%', left: '25%', name: 'NYC' },
            { top: '25%', left: '70%', name: 'LON' },
            { top: '70%', left: '20%', name: 'SYD' },
            { top: '30%', left: '85%', name: 'TOK' },
            { top: '65%', left: '75%', name: 'LA' },
          ].map((city, i) => (
            <div
              key={city.name}
              className="absolute w-2 h-2 rounded-full bg-accent animate-pulse"
              style={{
                top: city.top,
                left: city.left,
                animationDelay: `${i * 0.5}s`,
                boxShadow: `0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent)/0.5)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles with parallax */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * (0.1 + i * 0.01)}px)`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Curved connection lines */}
        <path 
          d="M 20 80 Q 200 20 380 120" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
        <path 
          d="M 100 200 Q 300 100 500 250" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        />
        <path 
          d="M 50 300 Q 250 200 450 350" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          style={{ transform: `translateY(${scrollY * -0.06}px)` }}
        />
      </svg>
    </div>
  );
};

export default ScrollingGlobe;