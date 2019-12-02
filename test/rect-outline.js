import RectOutline from '../rect-outline'
import Program from 'nanogl/program'

var expect      = require( 'expect.js' );

var testContext = require( './utils/TestContext' );
var gl = testContext.getContext();


describe( "RectOutline", function(){

  it( "should be exported", function(){
    expect( RectOutline ).to.be.ok( );
  });


  it( "constructor should return instance", function(){

    var p = new RectOutline( gl );
    expect( p ).to.be.ok( );
    expect( p.gl ).to.be.ok( );

  });


  it( "ctor should leave clean state", function(){
    var p = new RectOutline( gl );
    testContext.assertNoError();
  });


  it( "dispose should leave clean state", function(){
    var p = new RectOutline( gl );
    p.dispose();
    testContext.assertNoError();
  });



  describe( "should render", function(){

    var p = new Program( gl );
    p.compile(
      require( './glsl/test_outline.vert'),
      require( './glsl/test_outline.frag')
    );

    testContext.assertNoError();


    it( "A", function(){

      var rect = new RectOutline( gl );

      gl.clear( gl.COLOR_BUFFER_BIT )

      p.use();
      rect.attribPointer( p );
      rect.render()

      testContext.snapshot()

      testContext.testPixel( 0, 0, 0xff0202d7 )
      testContext.testPixel( 0, 63, 0xff02fdd7 )

      testContext.testPixel( 63, 63, 0xfffdfdd7 )
      testContext.testPixel( 63, 0, 0xfffd02d7 )
      testContext.testPixel( 10, 10, 0xff000000 )


      testContext.assertNoError();
    });



    it( "B", function(){

      var rect = new RectOutline( gl, 0, 0, .5, .5 );

      gl.clear( gl.COLOR_BUFFER_BIT )

      p.use();
      rect.attribPointer( p );
      rect.render()

      testContext.snapshot()

      testContext.testPixel( 0, 0,   0xff000000 )
      testContext.testPixel( 0, 63,  0xff000000 )
      testContext.testPixel( 63, 63, 0xff000000 )
      testContext.testPixel( 63, 0,  0xff000000 )

      testContext.testPixel( 32, 32, 0xff0808d7 )
      testContext.testPixel( 32, 47, 0xff08f7d7 )
      testContext.testPixel( 47, 47, 0xfff7f7d7 )
      testContext.testPixel( 47, 32, 0xfff708d7 )


      testContext.assertNoError();
    });



  });







});