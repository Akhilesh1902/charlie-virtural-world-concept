import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
// import { RigidBody } from '@react-three/rapier';
import { useTrimesh } from '@react-three/cannon';
import { useRef } from 'react';
// import { useEffect } from 'react';

const Land = () => {
  const land = useLoader(GLTFLoader, './land.glb');
  const scale = useRef(0.5);

  land.scene.traverse((child) => {
    if (child.isObject3D) {
      child.castShadow = true;
      child.receiveShadow = true;
      // console.log(child);
      if (child.isMesh) {
        child.material.envMapIntensity = 0.2;
        if (child.name === 'Landscape') {
          // child.material.wireframe = true;
        }
      }

      if (child.name === 'Landscape') child.castShadow = false;
    }
  });

  const vertex = land.scene.children[2].geometry.attributes.position.array;
  const index = land.scene.children[2].geometry.index.array;
  const [landPRef] = useTrimesh(() => ({
    args: [vertex, index],
    position: [0, 0, 0],
    mass: 10,
    type: 'Static',
  }));
  // useEffect(() => {
  //   const unsc = landPApi.position.subscribe((p) => (postMessage.current = p));
  //   return unsc;
  // }, [landPApi]);

  return (
    <>
      {/* <RigidBody colliders={'trimesh'} visible={true} type={'fixed'}> */}
      <primitive
        ref={landPRef}
        object={land.scene}
        // object={tm[0].current}
        scale={[scale.current, scale.current, scale.current]}></primitive>
      {/* </RigidBody> */}
    </>
  );
};

export default Land;
