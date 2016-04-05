'use strict';
// Load system modules

// Load modules

// Load my modules

// Constant declaration

// Module variables declaration

// Module interfaces declaration
interface Wrapper {
  ( data: any ): Post
}
interface Location {
  type: string,
  coordinates: number[],
}
interface Post {
  id: string,
  text: string,
  timestamp: number,
  date: Date,
  author: string,
  authorId: string,
  tags: string[],
  raw: any,

  location?: Location,
}


// Module functions declaration

// Module class declaration

// Module initialization (at first load)

// Module exports
export { Wrapper, Post, Location };

//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78
