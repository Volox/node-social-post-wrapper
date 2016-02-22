'use strict';
// Load system modules

// Load modules

// Load my modules

// Constant declaration

// Module variables declaration

// Module functions declaration
function wrap( data, social, options ) {
  options = options || {};
  var useField = options.useField===false? false : true;
  var field = options.field || 'provider';

  // Load wrapper
  var wrapper = require( './wrappers/'+social );

  // Wrap data
  var post = wrapper( data );
  if( !post ) {
    return null;
  }

  // Add common fields
  post.timestamp = post.date.getTime();

  // Add the provider if needed
  if( useField ) {
    post[ field ] = social;
  }

  return post;
}
// Module initialization (at first load)

// Module exports
module.exports = wrap;


//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78