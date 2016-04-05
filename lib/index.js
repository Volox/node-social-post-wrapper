'use strict';
// Load system modules

const path = require('path');
// Module functions declaration
function wrap(data, social) {
    let options = arguments.length <= 2 || arguments[2] === undefined ? { useField: true, field: 'provider' } : arguments[2];

    const wrapperPath = path.resolve(__dirname, 'wrappers', social);
    const wrapper = require(wrapperPath);
    // Generate post
    const post = wrapper(data);
    // Add the source if needed
    if (options.useField) {
        post[options.field] = social;
    }
    return post;
}
module.exports = wrap;
//  50 6F 77 65 72 65 64  62 79  56 6F 6C 6F 78