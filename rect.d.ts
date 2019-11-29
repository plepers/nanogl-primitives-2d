import GLArrayBuffer = require('nanogl/arraybuffer');
import { GLContext } from 'nanogl/types';
declare class Rect extends GLArrayBuffer {
    constructor(gl: GLContext, x?: number, y?: number, w?: number, h?: number);
    render(): void;
}
export = Rect;
