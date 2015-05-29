'use strict';
// Load system modules

// Load modules
var moment = require( 'moment' );

// Load my modules

// Constant declaration
var DATE_FORMAT = 'dd MMM DD HH:mm:ss ZZ YYYY';

// Module variables declaration

// Module functions declaration
function wrap( media ) {
  var date = moment.unix( media.created_time ); // jshint ignore: line

  var location = media.location;

  var post = {
    id: media.id,
    text: media.caption? media.caption.text: '',
    date: date.toDate(),
    location: location? {
      type: 'Point',
      coordinates: [ location.longitude, location.latitude ],
    } : null,
    author: media.user.username,
    authorId: media.user.id,
    tags: media.tags,
    raw: media,
  };

  return post;
}
// Module initialization (at first load)

// Module exports
module.exports = wrap;


//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78