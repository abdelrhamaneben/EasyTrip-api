var prod = false;
var urlServer;

if (prod == false) {
	urlServer = "http://localhost:1337/";
} else {
	urlServer = "http://172.28.1.101:1337/";
}