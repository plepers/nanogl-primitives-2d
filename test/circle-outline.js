var CircleOutline = require( '../circle-outline' );
var Program       = require( 'nanogl/program' );
var expect        = require( 'expect.js' );
var testContext   = require( './utils/TestContext' );

var gl = testContext.getContext();


describe( "CircleOutline", function(){

  it( "should be exported", function(){

    expect( CircleOutline ).to.be.ok( );

  });

  it( "constructor should return instance", function(){

    var p = new CircleOutline( gl );
    expect( p ).to.be.ok( );
    expect( p.gl ).to.be.ok( );

  });


  it( "ctor should leave clean state", function(){
    var p = new CircleOutline( gl );
    testContext.assertNoError();
  });


  it( "dispose should leave clean state", function(){
    var p = new CircleOutline( gl );
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

      var rect = new CircleOutline( gl );

      gl.clear( gl.COLOR_BUFFER_BIT )

      p.use();
      rect.attribPointer( p );
      rect.render()

      testContext.snapshot()

      testContext.testPixel( 0, 0,   0xff000000 )
      testContext.testPixel( 8, 8,   0xff000000 )
      testContext.testPixel( 13, 13, 0xff000000 )
      testContext.testPixel( 21, 3,  0xff560e85 )


      testContext.assertNoError();
    });



    it( "B", function(){

      var rect = new CircleOutline( gl, 1.0, 6 );

      gl.clear( gl.COLOR_BUFFER_BIT )

      p.use();
      rect.attribPointer( p );
      rect.render()

      testContext.snapshot()

      testContext.testPixel( 0, 0,   0xff000000 )
      testContext.testPixel( 10, 10, 0xff000000 )
      testContext.testPixel( 15, 15, 0xff000000 )
      testContext.testPixel( 12, 12, 0xff32329c )

      testContext.assertNoError();
    });



  });







});