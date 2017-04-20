//this APP checks if an url has WordPress admin page
const request = require('superagent');
const Promise = this.Promise || require('promise');
const agent = require('superagent-promise')(request, Promise);
let URL = process.argv.storeUrl(url);
//receive an URL and store it
function storeUrl(url) {
	return agent
	.get('URL')
	.query('/wp-admin')
	.end()
	.then(function() {
		//let title = URL.$('title')
		//if (url.headers	!==  ) {}
		console.log(url)
		})
	.catch(console.log('The site does not have wp-admin'));
};


//checks if the site has /wp/admin, returns true or false

