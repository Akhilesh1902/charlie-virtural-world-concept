import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import Entities from './Entities';
import Particles from './Entities/Particles';
const CanvasWrapper = () => {
  const pointerLockControls = useRef();
  useEffect(() => {
    console.log(pointerLockControls);
  }, [pointerLockControls]);

  return (
    <div className='canvasWrapper' style={{ backgroundColor: '#000000' }}>
      <Canvas shadows={true}>
        <PerspectiveCamera makeDefault position={[1, 5, 10]} />
        <ambientLight color={'#ffffff'} intensity={0.3} />
        <directionalLight
          color={'#ffffff'}
          intensity={1}
          position={[1, 1, 2]}
          castShadow={true}
        />
        <OrbitControls />
        <Environment background resolution={256} files={'./env.hdr'} />

        <Particles />
        <Suspense>
          <Entities />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
