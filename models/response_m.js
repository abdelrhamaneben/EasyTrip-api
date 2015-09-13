var express = require('express');

var response_m = {
	success : function (res, m_object) {
		if(m_object == '') {
			res.writeHead(500)
			res.write('Internal Error Server');
		}
		else {
			res.writeHead(200, {"Content-Type": 'application/json'});
	  		res.write(JSON.stringify(m_object));
		}
	  	res.end();
	  	return res;
	},
	E403 : function (res, message) {
		res.writeHead(403);
	  	res.write(message);
	  	res.end();
	  	return res;
	},
	E500 : function (res, message) {
		res.writeHead(500);
	  	res.write(message);
	  	res.end();
	  	return res;
	}
	,
	toString : function (m_object) {
		return JSON.stringify(m_object);
	}
};
module.exports = response_m;