'use strict';
// Load system modules

// Load modules
var moment = require( 'moment' );

// Load my modules

// Constant declaration
var DATE_FORMAT = 'dd MMM DD HH:mm:ss ZZ YYYY';

// Module variables declaration

// Module functions declaration
function wrap( tweet ) {
  var tags = [];
  if( tweet.entities ) {
    tags = tweet.entities.hashtags.map( function( h ) {
      return h.text;
    } );
  }
  var date = moment( tweet.created_at, DATE_FORMAT, 'en' ); // jshint ignore: line

  var post = {
    id: tweet.id_str, // jshint ignore: line
    text: tweet.text,
    date: date.toDate(),
    location: tweet.coordinates,
    author: tweet.user.screen_name, // jshint ignore: line
    authorId: tweet.user.id_str, // jshint ignore: line
    tags: tags,
    lang: tweet.lang,
    raw: tweet,
  };

  return post;
}
// Module initialization (at first load)

// Module exports
module.exports = wrap;


//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78