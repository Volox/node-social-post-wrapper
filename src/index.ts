'use strict';
// Load system modules
import path = require( 'path' );

// Load modules

// Load my modules
import { Wrapper, Post } from './wrappers/type';

// Constant declaration

// Module variables declaration
type Socials = 'twitter' | 'instagram';

// Module interfaces declaration
interface Options {
  useField?: boolean,
  field?: string,
}

// Module functions declaration
function wrap( data: any, social: Socials, options: Options = { useField: true, field: 'provider' }): Post {
  const wrapperPath: string = path.resolve( __dirname, 'wrappers', social );
  const wrapper: Wrapper = require( wrapperPath );

  // Generate post
  const post: Post = wrapper( data );

  // Add the source if needed
  if ( options.useField ) {
    post[options.field] = social;
  }

  return post;
}

// Module class declaration

// Module initialization (at first load)

// Module exports
export = wrap;

//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78
