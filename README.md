
# Social warp
Warps a post from a social network into a generic Post

# Usage

```js
var wrap = require( '@volox/social-post-wrapper' );
var tweet = {...}; // From Twitter
var instagramMedia = {...}; // From Instagram

// Without options
var twPost = wrap( tweet, 'twitter' );
var igPost = wrap( instagramMedia, 'instagram' );
console.log( twPost );
console.log( igPost );


// With options
var twPost1 = wrap( tweet, 'twitter', {
  useField: false,
} );
var igPost1 = wrap( instagramMedia, 'instagram', {
  field: 'source',
} );
console.log( twPost1 );
console.log( igPost1 );

// Will output
```

## Options
The wrapper accepts the following options:

| Name         | Description                                                                   | Type    | Required | Default |
| **useField** | Add a field that specifies the source of the post (EG twitter, instagram ...) | Boolean | `false`  | `true`  |
| **field**    | The field where the provider will be saved                                    | String  | `false`    | `'provider'`        |


## Post format:

| Field    | Description                                         | Type         | Available      |
| id       | The id from the provider                            | String       | yes            |
| text     | The text of the post                                | String       | yes            |
| date     | The creation date of the post                       | Date         | yes            |
| location | The location of the post as a GeoJSON point feature | GeoJON Point | **if present** |
| author   | The name of the author                              | String       | yes            |
| authorId | The id of the autor                                 | String       | yes            |
| tags     | The list of tags for the post                       | Array        | **if present** |
| lang     | The language of the post                            | String       | **if present** |
| raw      | The original posrt from the provider                | Object       | yes            |


## Example
```js
{
  id: '6457897564564564564654',
  text: 'TEST TEST',
  date: '2015-06-08T15:23:53.596Z',
  location: {
    type: 'Point',
    coordinates: [ longitude, latitude ]
  },
  author: 'Volox',
  authorId: '428956',
  tags: [
    'test',
    'tag',
  ],
  lang: 'en',
  provider: 'twitter',
  raw: { ... } // the original post from the social network
}
```