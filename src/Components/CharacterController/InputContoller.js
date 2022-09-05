export class InputController {
  constructor() {
    this._initialize();
  }
  _initialize() {
    this._current = {
      leftButton: false,
      rightButton: false,
      mouseX: 0,
      mouseY: 0,
    };
    this._previous = null;
    this._keys = {};
    this._previousKeys = {};
    document.addEventListener('mousedown', (e) => this._onMouseDown(e), false);
    document.addEventListener('mouseup', (e) => this._onMouseUp(e), false);
    document.addEventListener('mousemove', (e) => this._onMouseMove(e), false);
    document.addEventListener('onkeydown', (e) => this._onKeyDown(e), false);
    document.addEventListener('onkeyup', (e) => this._onKeyUp(e), false);
  }
  _onMouseDown(e) {
    switch (e.button) {
      case 0: {
        this._current.leftButton = true;
        break;
      }
      case 2: {
        this._current.rightButton = true;
        break;
      }
      default:
        break;
    }
  }
  _onMouseUp(e) {
    switch (e.button) {
      case 0: {
        this._current.leftButton = false;
        break;
      }
      case 2: {
        this._current.rightButton = false;
        break;
      }
      default:
        break;
    }
  }
  _onMouseMove(e) {
    // console.log(e);
    this._current.mouseX = e.pageX - window.innerHeight / 2;
    this._current.mouseY = e.pageY - window.innerHeight / 2;

    if (this._previous === null) {
      this._previous = { ...this._current };
    }

    this._current.mouseXDelta = this._current.mouseX - this._previous.mouseX;
    this._current.mouseYDelta = this._current.mouseY - this._previous.mouseY;
  }

  _onKeyDown(e) {
    this._keys[e.keyCode] = true;
  }
  _onKeyUp(e) {
    this._keys[e.keyCode] = true;
  }
  update() {
    //pass
    this._previous = { ...this._current };
  }
}
