var checker = require('./checkwp.js');
let domains = process.argv.slice(2);

for (var i in domains) {
	checker(domains[i]).then(logger.bind(domains[i]));
}

function logger(res) {
	if (res) {
		console.log(this + ' has WP installed');
	} else {
		console.log(this + ' does NOT have WP installed');
	}
}