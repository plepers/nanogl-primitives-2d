import GLArrayBuffer = require('nanogl/arraybuffer');
import { GLContext } from 'nanogl/types';
declare class CircleOutline extends GLArrayBuffer {
    constructor(gl: GLContext, radius?: number, segs?: number, thickness?: number);
    render(): void;
}
export = CircleOutline;
