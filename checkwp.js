const request = require('superagent');
let Promise = this.Promise || require('promise');
let agent = require('superagent-promise')(request, Promise);
let adminPath = "/wp-admin";

module.exports = checkUrl;

function checkUrl(domain) {
	return new Promise(function (resolve, reject) {
		if (!validDomain(domain)) {
			resolve(false);
		}

		let responded = function(res) {
			if (res !== null && res.status === undefined) {
				resolve(false);
			};
			resolve(!res.notFound);
		};

		let failed = function (err) {
			resolve(false);
		};

		return (agent
			.get(domain + adminPath)
			.end()
			.then(responded)
			.catch(failed)
		);

	});
};

function validDomain(domain) {
	let array = ["twitter.com", "github.com", "i.redd.it", "i.imgur.com", "imgur.com", "gfycat.com", "youtu.be", "gamasutra.com"];
	for (let i = 0; i < array.length ;i++) {
		if (domain === array[i]) {
			return false;
		}
	}
	return true;
}
