'use strict';
// Load system modules
// Load modules

const moment = require('moment');
// Constant declaration
const DATE_FORMAT = 'dd MMM DD HH:mm:ss ZZ YYYY';
// Module functions declaration
function wrapTwitter(tweet) {
    let tags = [];
    if (tweet.entities && tweet.entities.hashtags) {
        tags = tweet.entities.hashtags.map(h => h.text);
    }
    const date = moment(tweet.created_at, DATE_FORMAT, 'en').toDate();
    const post = {
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
        lang: tweet.lang
    };
    return post;
}
module.exports = wrapTwitter;
//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78