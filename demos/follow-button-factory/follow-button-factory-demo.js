var createAuthButton = require('auth/contrib/auth-button');
var auth = require('livefyre-auth');
var authButton = createAuthButton(auth, document.getElementById('auth-button'));

// auth
Livefyre.require(['lfep-auth-delegate#0'], function(LFEPDelegate) {
    // Wire up LFEP to AppKit Auth
    auth.delegate(new LFEPDelegate({
        engageOpts: {
            app: 'livefyre-dev'
        }
    }));
});

var FollowButtonFactory = require('collection-feed/follow-button-factory');

var subscriptions = [
  {
    "to": "urn:livefyre:demo.fyre.co:site=362588:topic=los_angeles",
    "type": "personalStream"
  },
  {
    "to": "urn:livefyre:demo.fyre.co:site=362588:topic=mlb",
    "type": "personalStream"
  },
  {
    "to": "urn:livefyre:demo.fyre.co:site=362588:topic=business",
    "type": "personalStream"
  },
  {
    "to": "urn:livefyre:demo.fyre.co:site=362588:topic=sports",
    "type": "personalStream"
  },
  {
    "to": "urn:livefyre:demo.fyre.co:site=362588:topic=entertainment",
    "type": "personalStream"
  }
];

var followButtonFactory = new FollowButtonFactory();
var followButtons = document.getElementById('follow-buttons');

subscriptions.forEach(function (subscription) {
  var topic = document.createElement('div');
  topic.appendChild(document.createTextNode(subscription.to));
  topic.appendChild(followButtonFactory.create(subscription.to));
  followButtons.appendChild(topic);
});
