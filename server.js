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

			$('.title_wrapper').filter(function(){
				var data = $(this);
				title = data.children().first().text().trim();
				json.title = title;
			})
		}

		fs.writeFile('output.json', JSON.stringify(json,null,4), function(err){
			console.log('File successfully written.');
		})
	});
res.send('Check the console.');

})

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;