import React, { useCallback, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/web';
import Overlay from './Overlay';
import Scene from './Scene';
import Contact from './Components/Contact';

const Projects = lazy(() => import('./Components/Projects'));

export default function App() {
  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring({ background: '#202020', fill: '#f0f0f0' }, []);

  // Memoized event handler for OrbitControls
  const handleControlsChange = useCallback(() => {
    // Handle controls change here
  }, []);

  return (
    <>
      <a.main style={{ background }}>
        <Canvas className="canvas" dpr={[1, 2]}>
          <Scene setBg={set} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            onChange={handleControlsChange}
          />
        </Canvas>
        <Overlay fill={fill} />
    
        </a.main>
        <a.main style={{ backgroundColor:'#f0f0f0' }}>
          <div className="h-full w-full">
            <Projects fill={fill}  />
            <Contact/>
          </div>
          
        </a.main>
        
      </>
      );
}
