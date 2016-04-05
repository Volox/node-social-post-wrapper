'use strict';
// Module functions declaration

function wrapInstagram(media) {
    const timestamp = Number(media.created_time);
    const date = new Date(timestamp);
    const text = media.caption ? media.caption.text : '';
    const post = {
        id: media.id,
        text: text,
        date: date,
        timestamp: timestamp,
        author: media.user.username,
        authorId: media.user.id,
        tags: media.tags,
        raw: media,
        // Instagram fields
        link: media.link
    };
    // Check for location
    const location = media.location;
    if (location && location.longitude) {
        post.location = {
            type: 'Post',
            coordinates: [location.longitude, location.latitude]
        };
    }
    return post;
}
module.exports = wrapInstagram;
//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78