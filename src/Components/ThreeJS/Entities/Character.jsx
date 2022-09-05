import React, { useRef, useEffect } from 'react';
import { Capsule } from '@react-three/drei';
// import { RigidBody } from '@react-three/rapier';
// import { FirstPersonCamera } from '../../CharacterController/FirstPersonController';
import { useFrame, useThree } from '@react-three/fiber';
import FPC from '../../CharacterController/FPC';

const Character = () => {
  // console.log(FirstPersonCamera);
  const camera = useThree((state) => state.camera);
  console.log(camera);
  console.log(FPC);
  // const FPC = new FirstPersonCamera(camera);
  const capsuleRef = useRef();

  const fpc = useRef();

  useEffect(() => {
    if (capsuleRef.current) fpc.current = new FPC(camera, [capsuleRef.current]);
    console.log(capsuleRef);
  }, [capsuleRef, camera]);

  useFrame(({ clock }) => {
    if (fpc.current === undefined) return;
    fpc.current.update(clock.getElapsedTime());
  });

  return (
    // <RigidBody visible={true} type={'kinimaticPosition'}>
    <Capsule ref={capsuleRef} args={[0.2, 0.5, 8, 32]} position={[0, 3, 0]}>
      <meshStandardMaterial color={'#ff0000'} />
    </Capsule>
    // </RigidBody>
  );
};

export default Character;
