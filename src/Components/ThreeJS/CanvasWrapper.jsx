import React from 'react';
import { Canvas } from '@react-three/fiber';
import MyBox from './MyBox';
import { OrbitControls } from '@react-three/drei';

const CanvasWrapper = () => {
  return (
    <div className='canvasWrapper' style={{ backgroundColor: '#000000' }}>
      <Canvas>
        <ambientLight color={'#ffffff'} intensity={0.3} />
        <directionalLight
          color={'#bf9552'}
          intensity={1}
          position={[1, 1, 2]}
        />
        <OrbitControls />
        <MyBox />
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
