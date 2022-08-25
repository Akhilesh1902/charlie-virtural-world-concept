import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const Model = ({ url, scale, position, rotation }) => {
  console.log(scale);
  const land = useLoader(GLTFLoader, url);
  console.log(land);
  return (
    <primitive
      object={land.scene}
      scale={scale ? scale : [1, 1, 1]}
      rotation={rotation ? rotation : [0, 0, 0]}
      position={position ? position : [0, 0, 0]}></primitive>
  );
};

export default Model;
