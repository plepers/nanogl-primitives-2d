import GLArrayBuffer from 'nanogl/arraybuffer';
import { GLContext } from 'nanogl/types';
export default class CircleOutline extends GLArrayBuffer {
    constructor(gl: GLContext, radius?: number, segs?: number, thickness?: number);
    render(): void;
}
