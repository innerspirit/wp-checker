const request = require('superagent');
//let URL = process.argv[2];
let URL = process.argv.filter(filterDomains);

function checkUrl(val) {
	let addwp = "/wp-admin";
	request
		.get(val + addwp)
		.end(function(err, res) {
			if (err !== null && err.status === undefined) {
				console.log('Wrong URL');
				return;
			};
      		if (res.notFound === false) {
				console.log('Has WordPress');
			} else {
				console.log('The site does not have wp-admin');
			}
		});
};

function filterDomains(post) {
	let array = ["twitter.com", "github.com", "i.redd.it", "i.imgur.com", "imgur.com", "gfycat.com"];
	for (let i = 0; i < array.length ;i++) {
		if (post === array[i]) {
			return false;
		}
	}
	return true;
}

checkUrl(URL[2]);