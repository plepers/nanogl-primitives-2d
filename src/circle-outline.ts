import GLArrayBuffer from 'nanogl/arraybuffer';
import { GLContext } from 'nanogl/types';


/**
 * This class manages a basic circle outline geometry.
 */
export default class CircleOutline extends GLArrayBuffer {
  /**
   * @param gl The webgl context this CircleOutline belongs to
   * @param radius The radius of the circle outline
   * @param segs The number of segments of the circle outline
   * @param thickness The thickness of the outline
   */
  constructor(gl: GLContext, radius: number = 1.0, segs: number = 32, thickness: number = 0.1) {

    super( gl );

    const a = new Float32Array((segs + 1) * 10);
    const inner = radius - thickness;
    const tcMult = (inner / radius) * 0.5;
    const arc = Math.PI * 2 / segs;

    for (var i = 0; i <= segs + 1; i++) {
      var x = Math.cos(i * arc);
      var y = -Math.sin(i * arc);
      var j = i * 10;
      a[j + 0] = radius * x;
      a[j + 1] = radius * y;
      a[j + 2] = x * 0.5 + 0.5;
      a[j + 3] = y * 0.5 + 0.5;

      a[j + 5] = inner * x;
      a[j + 6] = inner * y;
      a[j + 7] = x * tcMult + 0.5;
      a[j + 8] = y * tcMult + 0.5;

      a[j + 4] = 1;
      a[j + 9] = 0;
    }

    this.data(a);

    this.attrib('aPosition', 2, gl.FLOAT);
    this.attrib('aTexCoord', 2, gl.FLOAT);
    this.attrib('aSide', 1, gl.FLOAT);

  }


  /**
   * Draw the circle outline.
   * You need to link a program before calling this method.
   */
  render() {
    this.drawTriangleStrip();
  }

}
