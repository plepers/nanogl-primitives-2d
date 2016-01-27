var GLArrayBuffer = require( 'nanogl/arraybuffer' );

var TMP_ARRAY = new Float32Array( [
  -1, -1, 0, 0,
  -1,  1, 0, 1,
   1, -1, 1, 0,
   1,  1, 1, 1
] );


function Rect( gl, x, y, w, h ){
  x = (x===undefined) ? -1.0 : x;
  y = (y===undefined) ? -1.0 : y;
  w = (w===undefined) ?  2.0 : w;
  h = (h===undefined) ?  2.0 : h;

  Rect.call( this, gl );

  var a = TMP_ARRAY;
  a[0]  = a[4]  = x;
  a[1]  = a[9]  = y;
  a[8]  = a[12] = x+w;
  a[5]  = a[13] = y+h;

  this.data( a );

  this.attrib( 'aPosition', 2, gl.FLOAT );
  this.attrib( 'aTexCoord', 2, gl.FLOAT );

}


Rect.prototype = Object.create( GLArrayBuffer.prototype );
Rect.prototype.constructor = Rect;

Rect.prototype.render = function(){
  this.drawTriangleStrip();
};