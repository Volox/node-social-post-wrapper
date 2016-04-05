'use strict';
// Load system modules

// Load modules

// Load my modules
import { Wrapper, Post } from './type';

// Constant declaration

// Module variables declaration

// Module interfaces declaration
interface InstagramPost extends Post {
  link: string,
}

// Module functions declaration
function wrapInstagram( media: any ): Post {
  const timestamp: number = Number( media.created_time );
  const date: Date = new Date( timestamp );
  const text: string = media.caption ? media.caption.text : '';

  const post: InstagramPost = {
    id: media.id,
    text: text,
    date: date,
    timestamp: timestamp,
    author: media.user.username,
    authorId: media.user.id,
    tags: media.tags,
    raw: media,

    // Instagram fields
    link: media.link,
  };

  // Check for location
  const location: any = media.location;
  if ( location && location.longitude ) {
    post.location = {
      type: 'Post',
      coordinates: [
        location.longitude,
        location.latitude,
      ]
    };
  }

  return post;
}
// Module class declaration

// Module initialization (at first load)

// Module exports
export = wrapInstagram;

//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78