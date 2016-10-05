// Load system modules

// Load modules

// Load my modules
import { Wrapper, Post } from '../type';

// Constant declaration

// Module variables declaration

// Module interfaces declaration
interface FacebookPost extends Post {
}

// Module functions declaration
function wrapFacebook( fbPost: any ): Post {
  let tags: string[] = [];

  const date: Date = new Date( fbPost.created_time );

  const post: FacebookPost = {
    id: fbPost.id,
    text: fbPost.message,
    date: date,
    timestamp: date.getTime(),
    author: fbPost.from.name,
    authorId: fbPost.from.id,
    tags: tags,

    raw: fbPost,
  };

  if( fbPost.place && fbPost.place.location ) {
    const lat: number = fbPost.place.location.latitude;
    const lon: number = fbPost.place.location.longitude;
    const location: GeoJSON.Point = {
      type: 'Point',
      coordinates: [ lat, lon ],
    };
  }

  return post;
}
// Module class declaration

// Module initialization (at first load)

// Module exports
export = wrapFacebook;

//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78
