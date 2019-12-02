import GLArrayBuffer from 'nanogl/arraybuffer';
const TMP_ARRAY = new Float32Array([
    -1, -1, 0, 0,
    -1, 1, 0, 1,
    1, -1, 1, 0,
    1, 1, 1, 1
]);
export default class Rect extends GLArrayBuffer {
    constructor(gl, x = -1, y = -1, w = 2, h = 2) {
        super(gl);
        const a = TMP_ARRAY;
        a[0] = a[4] = x;
        a[1] = a[9] = y;
        a[8] = a[12] = x + w;
        a[5] = a[13] = y + h;
        this.data(a);
        this.attrib('aPosition', 2, gl.FLOAT);
        this.attrib('aTexCoord', 2, gl.FLOAT);
    }
    render() {
        this.drawTriangleStrip();
    }
}
