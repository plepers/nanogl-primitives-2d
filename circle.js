"use strict";
const GLArrayBuffer = require("nanogl/arraybuffer");
class Circle extends GLArrayBuffer {
    constructor(gl, radius = 1.0, segs = 32) {
        super(gl);
        const a = new Float32Array((segs + 2) << 2);
        const arc = Math.PI * 2 / segs;
        a[2] = a[3] = 0.5;
        for (var i = 0; i <= segs + 1; i++) {
            var x = Math.cos(i * arc);
            var y = -Math.sin(i * arc);
            var j = (i + 1) << 2;
            a[j + 0] = radius * x;
            a[j + 1] = radius * y;
            a[j + 2] = x * 0.5 + 0.5;
            a[j + 3] = y * 0.5 + 0.5;
        }
        this.data(a);
        this.attrib('aPosition', 2, gl.FLOAT);
        this.attrib('aTexCoord', 2, gl.FLOAT);
    }
    render() {
        this.drawTriangleFan();
    }
}
module.exports = Circle;
