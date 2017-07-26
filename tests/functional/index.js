define(function (require) {
	var registerSuite = require('intern!object');
	var assert = require('intern/chai!assert');
    var pollUntil = require('intern/dojo/node!leadfoot/helpers/pollUntil');

	registerSuite({
        before: function () {
//          return this.remote.get(require.toUrl('http://www.ydr.com/videos/entertainment/2017/07/24/shark-week-senator-wants-criminalize-possession-shark-fins/103014660/'));
          return this.remote.get(require.toUrl('https://uw-media.usatoday.com/video-wrap/embed?videoid=103952456&chromeless=true&sitelabel=reimagine&continuousplay=true&placement=uw-videoassetplayerhtml5&broadcastonly=true&autoplay=true'));
        },
		name: 'index',

		'greeting form': function () {
			return this.remote
				.setFindTimeout(8000)
//				.findByTagName('section')
                .then(pollUntil(function () {
                  return document.querySelector('video-wrap.aps-enabled').shadowRoot.querySelector('div.vid-container');
                }, [], 8000, 250))
                  assert.elementPresent.querySelector('video-wrap.aps-enabled').shadowRoot.querySelector('div.vid-container')

                .then(pollUntil(function () {
                  var element = document.querySelector('video-wrap.aps-enabled').shadowRoot.querySelector('video-player').shadowRoot.querySelector('.video-wrapper');
                  element.click();
                  return true;
                }, [], 8000, 250))
                .sleep(2000)
//                .getVisibleText()
//                .then(function (text) {
//                  assert.strictEqual(text, 'Shark Week: Senator wants to criminalize possession of shark fins', 'Video title should display after the page is loaded.');
//                });
//				.findByCssSelector('.video-desc')
//				.findByCssSelector('body.loaded')
//				.findById('nameField')
//					.click()
//					.type('Elaine')
//					.end()
//				.findByCssSelector('#loginForm input[type=submit]')
//					.click()
//					.end()
//				.findById('greeting')
//				.getVisibleText()
//				.then(function (text) {
//					assert.strictEqual(text, 'Hello, Elaine!',
//						'Greeting should be displayed when the form is submitted');
//				});
		}
	});
});
