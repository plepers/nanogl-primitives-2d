import GLArrayBuffer = require('nanogl/arraybuffer');
import { GLContext } from 'nanogl/types';
declare class Circle extends GLArrayBuffer {
    constructor(gl: GLContext, radius?: number, segs?: number);
    render(): void;
}
export = Circle;
