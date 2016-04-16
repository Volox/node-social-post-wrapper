'use strict';
// Load system modules

// Load modules

// Load my modules
import { Wrapper, Post } from '../type';

// Constant declaration

// Module variables declaration

// Module interfaces declaration
interface InstagramPost extends Post {
  link: string,
}

// Module functions declaration
export default function wrapInstagram( media: any ): Post {
  const timestamp: number = Number( media.created_time );
  const date: Date = new Date( timestamp );
  const text: string = media.caption ? media.caption.text : '';

  // Check for location
  let location: GeoJSON.Point;
  if ( media.location && media.location.longitude ) {
    location = {
      type: 'Post',
      coordinates: [
        Number( media.location.longitude ),
        Number( media.location.latitude ),
      ]
    };
  }

  // Create Instagram post
  const post: InstagramPost = {
    id: media.id,
    text: text,
    date: date,
    timestamp: timestamp,
    author: media.user.username,
    authorId: media.user.id,
    tags: media.tags,
    location: location,
    raw: media,

    // Instagram fields
    link: media.link,
  };



  return post;
}
// Module class declaration

// Module initialization (at first load)

// Module exports

//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78
