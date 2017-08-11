var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/scrape', function(req,res){

	
	var result = {["faculty"]:[]};
	// URL for faculty information of YMCAUST
	url = 'http://www.ymcaust.ac.in/f_detail.php?id=11';

	request(url, function(err,res,html){
		if(!err){

			var $ = cheerio.load(html);
			var name, qualification, department;
			var json = {name:""};

			name = $('.faculty-head:last-child').text();
			console.log(name+"this is printed");
			json.name = name;
		}
		result["faculty"].push(json);

		fs.writeFile('output.json', JSON.stringify(result,null,4), function(err){
			console.log('File successfully written.');
		})
	});
res.send('Check the console.');
})

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;