import { InputController } from './InputContoller';
import * as THREE from 'three';

function clamp(x, a, b) {
  //   console.log(x, a, b);
  return Math.min(Math.max(x, a), b);
}

export class FirstPersonCamera {
  constructor(camera) {
    console.log(camera);
    console.log('instantiating FPS cam');
    this._camera = camera;
    this._input = new InputController();
    this._rotation = new THREE.Quaternion();
    this._translation = new THREE.Vector3();
    this._phi = 0;
    this._theta = 0;
    this.phi = 0;
  }

  update(timeElapsed) {
    // console.log('here');
    this._updateRotation(timeElapsed);
    this._updateCamera(timeElapsed);
  }
  _updateCamera(_) {
    // console.log('updating cam');
    this._camera.quaternion.copy(this._rotation);
    // console.log(this._rotation);
  }
  _updateRotation(timeElapsed) {
    const xh = this._input._current.mouseXDelta / window.innerWidth;
    const yh = this._input._current.mouseYDelta / window.innerHeight;
    // console.log(yh);
    // console.log(this._theta - yh * 5);
    this._phi = xh * 8;
    // console.log(this._phi);
    this._theta = clamp(this._theta + -yh * 5, -Math.PI / 3, Math.PI / 3);
    // console.log(this._theta);

    const qx = new THREE.Quaternion();
    qx.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this._phi);
    const qz = new THREE.Quaternion();
    qz.setFromAxisAngle(new THREE.Vector3(1, 0, 0), this._phi);

    const q = new THREE.Quaternion();
    q.multiply(qx);
    q.multiply(qz);
    // console.log(this._phi);
    // console.log(qx);
    // console.log(qz);

    this._rotation.copy(q);
  }
}
