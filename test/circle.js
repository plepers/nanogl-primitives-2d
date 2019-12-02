import Circle       from '../circle'
import Program    from 'nanogl/program'

var expect      = require( 'expect.js' );

var testContext = require( './utils/TestContext' );
var gl = testContext.getContext();


describe( "Circle", function(){

  it( "should be exported", function(){

    expect( Circle ).to.be.ok( );

  });

  it( "constructor should return instance", function(){

    var p = new Circle( gl );
    expect( p ).to.be.ok( );
    expect( p.gl ).to.be.ok( );

  });


  it( "ctor should leave clean state", function(){
    var p = new Circle( gl );
    testContext.assertNoError();
  });


  it( "dispose should leave clean state", function(){
    var p = new Circle( gl );
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

      var rect = new Circle( gl );

      gl.clear( gl.COLOR_BUFFER_BIT )

      p.use();
      rect.attribPointer( p );
      rect.render()

      testContext.snapshot()

      testContext.testPixel( 0, 0,   0xff000000 )
      testContext.testPixel( 8, 8,   0xff000000 )
      testContext.testPixel( 16, 32, 0xff428100 )


      testContext.assertNoError();
    });



    it( "B", function(){

      var rect = new Circle( gl, 1.0, 6 );

      gl.clear( gl.COLOR_BUFFER_BIT )

      p.use();
      rect.attribPointer( p );
      rect.render()

      testContext.snapshot()

      testContext.testPixel( 0, 0,   0xff000000 )
      testContext.testPixel( 10, 10, 0xff000000 )
      testContext.testPixel( 22, 14, 0xff5a3a00 )

      testContext.assertNoError();
    });



  });







});