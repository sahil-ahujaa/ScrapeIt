var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/scrape', function(req,res){

	// Dummy URL for static scraper
	url = 'http://www.imdb.com/title/tt5764096/';

	request(url, function(err,res,html){
		if(!err){

			var $ = cheerio.load(html);
			var title, release, rating;
			var json = {title:"",release:"",rating:""};
		}
	})

})

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;