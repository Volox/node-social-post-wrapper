'use strict';
// Load system modules

// Load modules

// Load my modules

// Constant declaration

// Module variables declaration

// Module interfaces declaration
export interface Post {
  id: string,
  text: string,
  date: Date,
  timestamp: number,
  author: string,
  authorId: string,
  tags: string[],
  raw: any,

  // Location can be null
  location: GeoJSON.Point,
}
export interface Wrapper {
  ( data: any ): Post
}


// Module functions declaration

// Module class declaration

// Module initialization (at first load)

// Module exports

//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78
