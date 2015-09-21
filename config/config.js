var config = {};

config.user = 'slimane';
config.password = 'iir';
config.database = 'postgres';
config.host = 'localhost';
config.port = '5432';
config.connectionString = 'postgres://'+ config.user + ':' + config.password + '@'+ config.host +':'+ config.port +'/'+ config.database;

module.exports = config;