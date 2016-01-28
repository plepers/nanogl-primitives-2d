precision mediump float;

varying vec2 vTexCoord;

varying float vSide;


void main(void){

  gl_FragColor = vec4( vTexCoord, vSide, 1.0 );

}