import GLArrayBuffer from 'nanogl/arraybuffer';
import { GLContext } from 'nanogl/types';
export default class RectOutline extends GLArrayBuffer {
    constructor(gl: GLContext, x?: number, y?: number, w?: number, h?: number, thickness?: number);
    render(): void;
}
