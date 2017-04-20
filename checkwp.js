const request = require('superagent');
let URL = process.argv[2];

function checkUrl(val) {
	let addwp = "/wp-admin";
	request
		.get(val + addwp)
		.end(function(err, res) {
			if (err.status === undefined) {
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
checkUrl(URL);
