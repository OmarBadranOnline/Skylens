import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Noise, Bloom, Vignette } from '@react-three/postprocessing';
import { Scene } from './components/Scene';
import { UIOverlay } from './components/UIOverlay';
import { SectionHTML } from './components/SectionHTML';
import { ProjectPage } from './components/ProjectPage';
import { LoadingScreen } from './components/LoadingScreen';
import { FloatingContact } from './components/FloatingContact';
import { BlendFunction } from 'postprocessing';

const Home: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      // Calculate progress, ensuring we don't divide by zero
      const progress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollY / maxScroll)) : 0;
      setScrollOffset(progress);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Recalculate on resize

    // Initial check after a slight delay to ensure DOM is fully rendered
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />

      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="fixed inset-0 z-0">
          <Canvas
            shadows
            dpr={[1, 2]}
            gl={{ antialias: false, stencil: false, depth: true }}
            camera={{ position: [0, 0, 0], fov: 75, near: 0.1, far: 200 }}
          >
            {/* Global Lighting - Boosted intensity for visibility */}
            <ambientLight intensity={0.5} color="#001133" />
            <spotLight
              position={[10, 10, 10]}
              angle={0.5}
              penumbra={1}
              intensity={2}
              castShadow
            />
            <directionalLight position={[-10, 10, 5]} intensity={1} color="#ffaa00" />

            <Suspense fallback={null}>
              {/* Pass scroll offset directly to scene since we removed ScrollControls */}
              <Scene scrollOffset={scrollOffset} />

              {/* Simple environment replacement */}
              <color attach="background" args={['#050505']} />
              <fog attach="fog" args={['#050505', 8, 40]} />

              <EffectComposer enableNormalPass={false}>
                <Noise opacity={0.05} blendFunction={BlendFunction.OVERLAY} />
                <Bloom
                  luminanceThreshold={0.5}
                  mipmapBlur
                  intensity={1.0}
                  radius={0.6}
                />
                <Vignette eskil={false} offset={0.1} darkness={0.8} />
              </EffectComposer>
            </Suspense>
          </Canvas>
        </div>

        {/* Render HTML content outside Canvas for native scroll */}
        <div className="relative z-10">
          <SectionHTML />
        </div>

        <UIOverlay />
        <FloatingContact />

        {/* Scroll Progress Indicator */}
        <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-900 z-50">
          <div
            className="h-full bg-orange-500 transition-all duration-75 ease-out"
            style={{ width: `${scrollOffset * 100}%` }}
          />
        </div>
      </div>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;