import React from 'react';
import { RoundedBox } from '@react-three/drei';

const MyBox = () => {
  return (
    <RoundedBox radius={0.2}>
      <meshStandardMaterial color={'#70659e'} />
    </RoundedBox>
  );
};

export default MyBox;
