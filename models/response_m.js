var express = require('express');

var response_m = {
	send : function (res, m_object) {
		res.writeHead(200, {"Content-Type": 'application/json'});
	  	res.write(JSON.stringify(m_object));
	  	res.end();
	  	return this;
	}
};
module.exports = response_m;