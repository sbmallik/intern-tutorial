define(function (require) {
	var registerSuite = require('intern!object');
	var assert = require('intern/chai!assert');

	registerSuite({
        before: function () {
          return this.remote.get(require.toUrl('http://www.ydr.com/videos/entertainment/2017/07/24/shark-week-senator-wants-criminalize-possession-shark-fins/103014660/'));
        },
		name: 'index',

		'greeting form': function () {
			return this.remote
				.setFindTimeout(5000)
				.findByClassName('gallery-title')
                .getVisibleText()
                .then(function (text) {
                  assert.strictEqual(text, 'Shark Week: Senator wants to criminalize possession of shark fins', 'Video title should display after the page is loaded.');
                });
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
