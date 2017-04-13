var http = require("http")

var data = [];

var server = http.createServer(function(req,res){

	console.log(req.url);
	var str = req.url.split("?");
	console.log(str);
	str = str[1];
	var arr = str.split("&");
	console.log(arr);
	var one = {};
	arr.forEach(function(o){
		var s = o.split("=");
		one[s[0]] = s[1];
		console.log(one);
		data.push(one);	
	});
	console.log(data);	
	var html = "<>"

	res.setHeader("Content-Type","text/html");
	var str = "<table>";
	data.forEach(function(o){
	str += "<tr>";
	Object.keys(o).forEach(function(m){
		str += "<td>" + o[m] + "</td>";
	});
	str += "</tr>";
	});
	//str = str + "</table>"; 
	str += "</table>";
	console.log(str);
	res.end(str);
});
server.listen(3000);
