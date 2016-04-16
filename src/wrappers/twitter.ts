'use strict';
// Load system modules

// Load modules
import moment = require( 'moment' );

// Load my modules
import { Wrapper, Post } from '../type';

// Constant declaration
const DATE_FORMAT = 'dd MMM DD HH:mm:ss ZZ YYYY';

// Module variables declaration

// Module interfaces declaration
interface TwitterPost extends Post {
  lang: string,
}

// Module functions declaration
function wrapTwitter( tweet: any ): Post {
  let tags: string[] = [];
  if ( tweet.entities && tweet.entities.hashtags ) {
    tags = tweet.entities.hashtags.map( h => h.text );
  }

  const date: Date = moment( tweet.created_at, DATE_FORMAT, 'en' ).toDate();

  const post: TwitterPost = {
    id: tweet.id_str,
    text: tweet.text,
    date: date,
    timestamp: date.getTime(),
    author: tweet.user.screen_name,
    authorId: tweet.user.id_str,
    tags: tags,
    raw: tweet,

    // Optional fields
    location: tweet.coordinates,

    // Twitter fields
    lang: tweet.lang,
  };

  return post;
}
// Module class declaration

// Module initialization (at first load)

// Module exports
export = wrapTwitter;

//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78
