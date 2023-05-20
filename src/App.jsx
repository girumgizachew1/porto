import React, { useCallback, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/web';
import Overlay from './Overlay';
import Scene from './Scene';
import Contact from './Components/Contact';
import { Helmet } from 'react-helmet';
const Projects = lazy(() => import('./Components/Projects'));

export default function App() {
  const title = "Girum Gizachew";
  const metaDescription = "Portfolio of Girum Gizachew, a Senior Frontend Developer specializing in React and Next.js.";

  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring({ background: '#202020', fill: '#f0f0f0' }, []);

  // Memoized event handler for OrbitControls
  const handleControlsChange = useCallback(() => {
    // Handle controls change here
  }, []);

  return (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
          </Helmet>

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
    <a.main style={{ backgroundColor: '#f0f0f0' }}>
      <div className="h-full w-full">
        <Projects fill={fill} />

      </div>

    </a.main>
    <a.main style={{ background }} className='h-20' >

      <Contact />
    </a.main>

  </>
  );
}
