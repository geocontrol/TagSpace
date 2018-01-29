var Flickr = require('flickr-sdk');

var flickr = new Flickr('4e5a14333f6b2230120af5a9b3bd375a');

flickr.tags.getListUser({
  user_id: '12403504@N02' 
}).then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});