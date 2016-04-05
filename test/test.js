'use strict';

const chai = require( 'chai' );
const expect = chai.expect;

const wrap = require( '../' );

describe( 'Wrap', function() {

  describe( 'Twitter', function() {
    let tweets = require( './twitter.json' );

    it( 'should', function() {
      const posts = tweets.map( t => wrap( t, 'twitter' ) );

      expect( posts ).to.have.length( tweets.length );

      expect( posts[0] ).to.have.property( 'lang' );
    } );
  } );

  describe( 'Instagram', function() {
    let media = require( './instagram.json' );

    it( 'should', function() {
      const posts = media.map( m => wrap( m, 'instagram' ) );

      expect( posts ).to.have.length( media.length );
      expect( posts[0] ).to.have.property( 'link' );
    } );
  } );

} );
