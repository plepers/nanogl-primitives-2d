var GLArrayBuffer = require( 'nanogl/arraybuffer' );



function CircleOutline( gl, radius, segs, thickness ){
  radius     = (radius   ===undefined) ? 1.0 : radius;
  segs       = (segs     ===undefined) ? 32  : segs  ;
  thickness  = (thickness===undefined) ? .1  : thickness;

  CircleOutline.call( this, gl );

  var a = new Float32Array( (segs+1)*10 );
  var inner = radius - thickness;
  var tcMult= (inner/radius)*.5;
  var arc = Math.PI*2/segs;

  for( var i = 0; i <= segs+1; i++ ) {
    var x =  Math.cos( i*arc );
    var y = -Math.sin( i*arc );
    var j = i*10;
    a[j+0] = radius*x;
    a[j+1] = radius*y;
    a[j+2] = x*.5+.5;
    a[j+3] = y*.5+.5;

    a[j+5] = inner*x;
    a[j+6] = inner*y;
    a[j+7] = x*tcMult+.5;
    a[j+8] = y*tcMult+.5;

    a[j+4] = 1;
    a[j+9] = 0;
  }

  this.data( a );

  this.attrib( 'aPosition', 2, gl.FLOAT );
  this.attrib( 'aTexCoord', 2, gl.FLOAT );
  this.attrib( 'aSide'    , 1, gl.FLOAT );

}


CircleOutline.prototype = Object.create( GLArrayBuffer.prototype );
CircleOutline.prototype.constructor = CircleOutline;

CircleOutline.prototype.render = function(){
  this.drawTriangleStrip();
};