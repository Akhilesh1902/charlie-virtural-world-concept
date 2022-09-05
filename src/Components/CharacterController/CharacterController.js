import * as THREE from 'three';

class CharacterController {
  // temporary data
  walkDirection = new THREE.Vector3();
  rotateAngle = new THREE.Vector3(0, 1, 0);
  rotateQuarternion = new THREE.Quaternion();
  cameraTarget = new THREE.Vector3();

  // constants
  fadeDuration = 0.2;
  runVelocity = 5;
  walkVelocity = 2;

  constructor(camera, pointerControl) {
    this.camera = camera;
    this.controls = pointerControl;
    this.updateCameraTarget(0, 0);
  }

  update(delta, keysPressed) {
    const directionPressed = Object.values(BCCI._keys).some((v) => v === true);
  }

  updateCameraTarget(moveX, moveZ) {
    // move camera
    this.camera.position.x += moveX;
    this.camera.position.z += moveZ;

    // update camera target
    // this.cameraTarget.x = this._model.position.x;
    // this.cameraTarget.y = this._model.position.y + 1;
    // this.cameraTarget.z = this._model.position.z;
    // this._OC.target = this.cameraTarget;
  }

  directionOffset(keysPressed) {
    var directionOffset = 0; // w

    if (keysPressed.backward) {
      if (keysPressed.left) {
        directionOffset = Math.PI / 4; // w+a
      } else if (keysPressed.right) {
        directionOffset = -Math.PI / 4; // w+d
      }
    } else if (keysPressed.forward) {
      if (keysPressed.left) {
        directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
      } else if (keysPressed.right) {
        directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
      } else {
        directionOffset = Math.PI; // s
      }
    } else if (keysPressed.left) {
      directionOffset = Math.PI / 2; // a
    } else if (keysPressed.right) {
      directionOffset = -Math.PI / 2; // d
    }

    return directionOffset;
  }
}
