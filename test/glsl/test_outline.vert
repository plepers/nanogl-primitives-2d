
attribute vec2 aPosition;
attribute vec2 aTexCoord;
attribute float aSide;

varying vec2 vTexCoord;
varying float vSide;

void main( void ){
  gl_Position = vec4( aPosition, 0.0, 1.0 );
  vTexCoord = aTexCoord;
  vSide = aSide;
}