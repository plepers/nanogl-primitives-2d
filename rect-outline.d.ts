import GLArrayBuffer = require('nanogl/arraybuffer');
import { GLContext } from 'nanogl/types';
declare class RectOutline extends GLArrayBuffer {
    constructor(gl: GLContext, x?: number, y?: number, w?: number, h?: number, thickness?: number);
    render(): void;
}
export = RectOutline;
