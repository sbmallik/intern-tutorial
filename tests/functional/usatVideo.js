define(function (require) {
	var registerSuite = require('intern!object');
	var assert = require('intern/chai!assert');
    var pollUntil = require('intern/dojo/node!leadfoot/helpers/pollUntil');

	registerSuite({
        before: function () {
          return this.remote.get(require.toUrl('https://uw-media.usatoday.com/video-wrap/embed?videoid=103952456&chromeless=true&sitelabel=reimagine&continuousplay=true&placement=uw-videoassetplayerhtml5&broadcastonly=true&autoplay=true'));
        },
		name: 'usatVideo',

		'USAT Video': function () {
			return this.remote
				.setFindTimeout(8000)
                .then(pollUntil(function () {
                  return document.querySelector('video-wrap.aps-enabled').shadowRoot.querySelector('div.vid-container');
                }, [], 8000, 250))
//                .then(function() {
//                  assert.exists(document.querySelector('video-wrap.aps-enabled').shadowRoot.querySelector('div.video-container'), 'Element exists')
//                })
                .then(pollUntil(function () {
                  var element = document.querySelector('video-wrap.aps-enabled').shadowRoot.querySelector('video-player').shadowRoot.querySelector('.video-wrapper');
//                  element.click();
                  return element;
                }, [], 8000, 250))
                .execute(function() {
                  return document.querySelector('video-wrap.aps-enabled').shadowRoot.querySelector('video-player').shadowRoot.querySelector('.video-wrapper');
                  return document.click()
                })
		}
	});
});
