import GLArrayBuffer from 'nanogl/arraybuffer'
import { GLContext } from 'nanogl/types';

const TMP_ARRAY = new Float32Array( [
  -1, -1, 0, 0,
  -1,  1, 0, 1,
   1, -1, 1, 0,
   1,  1, 1, 1
] );


/**
 * This class manages a basic rectangle geometry.
 */
export default class Rect extends GLArrayBuffer {
  /**
   * @param gl The webgl context this Rect belongs to
   * @param x The x position of the rectangle
   * @param y The y position of the rectangle
   * @param w The width of the rectangle
   * @param h The height of the rectangle
   */
  constructor( gl : GLContext, x : number = -1, y : number = -1, w : number = 2, h : number = 2 ){

    super( gl );

    const a = TMP_ARRAY;
    a[0]  = a[4]  = x;
    a[1]  = a[9]  = y;
    a[8]  = a[12] = x+w;
    a[5]  = a[13] = y+h;

    this.data( a );

    this.attrib( 'aPosition', 2, gl.FLOAT );
    this.attrib( 'aTexCoord', 2, gl.FLOAT );

  }


  /**
   * Draw the rectangle.
   */
  render(){
    this.drawTriangleStrip();
  }

}
