#!/usr/bin/env node
let checker = require('./checkwp.js');
let domains = process.argv.slice(2);

if (domains.length === 0) {
    console.log('Please provide a domain.');
    process.exit(1);
}

for (let i in domains) {
	checker(domains[i]).then(logger.bind(domains[i]));
}

function logger(res) {
	if (res) {
		console.log(this + ' has WP installed');
	} else {
		console.log(this + ' does NOT have WP installed');
	}
}