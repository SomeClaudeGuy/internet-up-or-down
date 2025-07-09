import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars, Text, Float } from "@react-three/drei";
import * as THREE from "three";

// 3D Globe Component
const Globe = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  // Create earth-like texture
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Create gradient for earth-like appearance
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, '#4FC3F7');
    gradient.addColorStop(0.3, '#29B6F6');
    gradient.addColorStop(0.6, '#0288D1');
    gradient.addColorStop(1, '#01579B');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    // Add some continent-like shapes
    ctx.fillStyle = '#2E7D32';
    ctx.globalAlpha = 0.7;
    
    // Draw some abstract continent shapes
    ctx.fillRect(100, 150, 80, 60);
    ctx.fillRect(200, 200, 120, 40);
    ctx.fillRect(350, 100, 90, 80);
    ctx.fillRect(50, 300, 100, 70);
    ctx.fillRect(300, 350, 150, 80);
    
    const earthTexture = new THREE.CanvasTexture(canvas);
    setTexture(earthTexture);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate based on scroll with smooth parallax
      meshRef.current.rotation.y = scrollY * 0.002;
      meshRef.current.rotation.x = Math.sin(scrollY * 0.001) * 0.1;
      
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshPhongMaterial 
          map={texture}
          shininess={100}
          transparent
          opacity={0.9}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[2.1, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#4FC3F7"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </Float>
  );
};

// Floating city markers
const CityMarkers = ({ scrollY }: { scrollY: number }) => {
  const cities = [
    { position: [1.8, 0.5, 0.8], name: "NYC" },
    { position: [-1.2, 0.8, 1.4], name: "LON" },
    { position: [0.5, -1.6, 1.2], name: "SYD" },
    { position: [-0.8, 1.2, -1.6], name: "TOK" },
    { position: [1.4, -0.6, -1.2], name: "LA" },
  ];

  return (
    <>
      {cities.map((city, index) => (
        <group key={city.name}>
          <Sphere 
            args={[0.03, 8, 8]} 
            position={city.position as [number, number, number]}
          >
            <meshBasicMaterial color="#FFD700" />
          </Sphere>
          <pointLight 
            position={city.position as [number, number, number]}
            color="#FFD700"
            intensity={0.5}
            distance={1}
          />
        </group>
      ))}
    </>
  );
};

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
      {/* 3D Canvas positioned higher on the page */}
      <div 
        className="absolute w-full h-[120vh] -top-[20vh]"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: 'transparent' }}
        >
          {/* Lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#4FC3F7" />
          
          {/* Background stars */}
          <Stars 
            radius={100} 
            depth={50} 
            count={2000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={0.5}
          />
          
          {/* Main globe */}
          <Globe scrollY={scrollY} />
          
          {/* City markers */}
          <CityMarkers scrollY={scrollY} />
        </Canvas>
      </div>

      {/* Background particle effects */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * (0.05 + i * 0.002)}px)`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${3 + i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default ScrollingGlobe;