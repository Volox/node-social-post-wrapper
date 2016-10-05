// Load system modules
import {resolve} from 'path';

// Load modules

// Load my modules
import { Wrapper, Post, Options } from './type';

// Constant declaration

// Module variables declaration

// Module interfaces declaration
export { Wrapper, Post, Options };

// Module functions declaration
export default function wrap( data: any, social: string, options: Options = {} ): Post {
  options.useField = options.useField === false ? false : true;
  options.field = options.field || 'provider';

  const wrapperPath: string = resolve( __dirname, 'wrappers', social );
  const wrapper = require( wrapperPath ) as Wrapper;

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

//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78
