import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
const Particles = ({ count = 16000 }) => {
  const myPoints = useRef();
  const fogRef = useRef();
  const pointBoxScale = useRef(5);

  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 13.5);
    return new THREE.BufferAttribute(new Float32Array(p), 3);
  }, [count]);
  const texture = useLoader(THREE.TextureLoader, './snowFlake.png');
  // eslint-disable-next-line
  useFrame(({}, delta) => {
    myPoints.current.position.y -= delta;
    if (myPoints.current.position.y < -3) {
      myPoints.current.position.y = 5;
    }
  });
  return (
    <>
      <fog ref={fogRef} attach='fog' color='#ffffff' near={5} far={30} />
      <points
        ref={myPoints}
        scale={[
          pointBoxScale.current,
          pointBoxScale.current,
          pointBoxScale.current,
        ]}>
        <bufferGeometry>
          <bufferAttribute attach={'attributes-position'} {...points} />
        </bufferGeometry>
        <pointsMaterial
          size={0.3}
          threshold={0.1}
          // color={'#ffffff'}
          sizeAttenuation={true}
          map={texture}
          transparent
          // toneMapped={false}
          // alphaMap={true}
        />
      </points>
    </>
  );
};

export default Particles;
