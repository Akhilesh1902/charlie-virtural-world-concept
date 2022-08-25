import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
const Land = () => {
  const land = useLoader(GLTFLoader, './land.glb');
  land.scene.traverse((child) => {
    if (child.isObject3D) {
      child.castShadow = true;
      child.receiveShadow = true;
      if (child.name === 'Landscape') child.castShadow = false;
    }
  });

  return (
    <>
      <primitive object={land.scene} scale={[0.1, 0.1, 0.1]}></primitive>
    </>
  );
};

export default Land;
