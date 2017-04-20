//this APP checks if an url has WordPress admin page
const request = require('superagent');
let URL = process.argv[2];
//receive an URL and store it
function storeUrl(val) {
	let addwp = "/wp-admin";
	request
	.get(val + addwp)
	.end(function(err, res) {
		if (res.notFound === false) {
			console.log('Has WordPress')
			} else {
				console.log('The site does not have wp-admin')
			}
		});
};
storeUrl(URL);
