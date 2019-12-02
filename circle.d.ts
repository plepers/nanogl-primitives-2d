import GLArrayBuffer from 'nanogl/arraybuffer';
import { GLContext } from 'nanogl/types';
export default class Circle extends GLArrayBuffer {
    constructor(gl: GLContext, radius?: number, segs?: number);
    render(): void;
}
