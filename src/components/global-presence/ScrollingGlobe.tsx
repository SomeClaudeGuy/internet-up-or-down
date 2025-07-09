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
      {/* Main 3D Globe */}
      <div 
        className="absolute top-1/4 left-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]"
        style={{ 
          transform: `translate(-50%, calc(-75% + ${scrollY * 0.15}px)) rotateX(10deg) rotateY(${scrollY * 0.1}deg)`,
          transition: 'none'
        }}
      >
        {/* Globe sphere */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 backdrop-blur-sm shadow-2xl">
          {/* Globe texture overlay */}
          <div 
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 20%, hsl(var(--accent) / 0.2) 0%, transparent 30%),
                radial-gradient(circle at 20% 70%, hsl(var(--primary) / 0.2) 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.1) 0%, transparent 25%)
              `
            }}
          />
          
          {/* Latitude lines */}
          {[20, 40, 60, 80].map((offset, i) => (
            <div
              key={`lat-${i}`}
              className="absolute left-0 right-0 border-t border-primary/20"
              style={{
                top: `${offset}%`,
                borderRadius: '50%',
                transform: `scaleX(${Math.cos((offset - 50) * 0.02)})`,
              }}
            />
          ))}
          
          {/* Longitude lines */}
          {[20, 40, 60, 80].map((offset, i) => (
            <div
              key={`lon-${i}`}
              className="absolute top-0 bottom-0 border-l border-primary/20"
              style={{
                left: `${offset}%`,
                borderRadius: '50%',
                transform: `scaleY(${Math.sin(offset * 0.02) + 0.5})`,
              }}
            />
          ))}
          
          {/* Glowing cities/nodes */}
          <div className="absolute top-[30%] left-[40%] w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" />
          <div className="absolute top-[60%] left-[70%] w-1.5 h-1.5 bg-accent rounded-full shadow-lg shadow-accent/50 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[45%] left-[20%] w-2.5 h-2.5 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[25%] left-[80%] w-1 h-1 bg-accent rounded-full shadow-lg shadow-accent/50 animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute top-[75%] left-[50%] w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" style={{ animationDelay: '4s' }} />
          
          {/* Atmosphere glow */}
          <div className="absolute inset-[-20px] rounded-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl" />
        </div>
        
        {/* Globe shadow */}
        <div 
          className="absolute top-[80%] left-[10%] w-[80%] h-[20%] bg-black/20 rounded-full blur-2xl"
          style={{ transform: 'rotateX(75deg)' }}
        />
      </div>
      
      {/* Background stars/particles that move at different speeds */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * (0.02 + i * 0.001)}px)`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${2 + i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default ScrollingGlobe;