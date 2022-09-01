import React from 'react';
import { Capsule } from '@react-three/drei';

const Character = () => {
  return (
    <Capsule args={[0.2, 0.5, 8, 32]} position={[0, 1, 0]}>
      <meshStandardMaterial color={'#ff0000'} />
    </Capsule>
  );
};

export default Character;
