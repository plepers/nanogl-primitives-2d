var Rect        = require( '../rect' );
var Program     = require( 'nanogl/program' );

var expect      = require( 'expect.js' );

var testContext = require( './utils/TestContext' );
var gl = testContext.getContext();


describe( "Rect", function(){

  it( "should be exported", function(){

    expect( Rect ).to.be.ok( );

  });

  it( "constructor should return instance", function(){

    var p = new Rect( gl );
    expect( p ).to.be.ok( );
    expect( p.gl ).to.be.ok( );

  });


  it( "ctor should leave clean state", function(){
    var p = new Rect( gl );
    testContext.assertNoError();
  });


  it( "dispose should leave clean state", function(){
    var p = new Rect( gl );
    p.dispose();
    testContext.assertNoError();
  });



  describe( "should render", function(){

    var p = new Program( gl );
    p.compile(
      require( './glsl/test_shape.vert'),
      require( './glsl/test_shape.frag')
    );

    testContext.assertNoError();


    it( "A", function(){

      var rect = new Rect( gl );

      gl.clear( gl.COLOR_BUFFER_BIT )

      p.use();
      rect.attribPointer( p );
      rect.render()

      testContext.snapshot()

      testContext.testPixel( 0, 0, 0xff020202 )
      testContext.testPixel( 0, 63, 0xff02fd00 )

      testContext.testPixel( 63, 63, 0xfffdfd00 )
      testContext.testPixel( 63, 0, 0xfffd0200 )


      testContext.assertNoError();
    });



    it( "B", function(){

      var rect = new Rect( gl, 0, 0, .5, .5 );

      gl.clear( gl.COLOR_BUFFER_BIT )

      p.use();
      rect.attribPointer( p );
      rect.render()

      testContext.snapshot()

      testContext.testPixel( 0, 0,   0xff000000 )
      testContext.testPixel( 0, 63,  0xff000000 )
      testContext.testPixel( 63, 63, 0xff000000 )
      testContext.testPixel( 63, 0,  0xff000000 )

      testContext.testPixel( 32, 32, 0xff080800 )
      testContext.testPixel( 32, 47, 0xff08f700 )
      testContext.testPixel( 47, 47, 0xfff7f700 )
      testContext.testPixel( 47, 32, 0xfff70800 )


      testContext.assertNoError();
    });



  });







});