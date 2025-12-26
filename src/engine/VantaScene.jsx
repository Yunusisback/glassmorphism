import  { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import CELLS from 'vanta/dist/vanta.cells.min';

export default function VantaScene() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  
useEffect(() => {
  if (!vantaEffect && vantaRef.current) {
    const effect = CELLS({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.0,
      color1: 0x0f766e,    
      color2: 0x22d3ee,    
      size: 2.0,
      speed: 1.5,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed inset-0 w-full h-full z-0" />;
}