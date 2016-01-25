var mysql = require('mysql');
var fs = require('fs');

var configFile = fs.readFileSync('/var/www/api-commons/config.json');
var config;

try
{
	config = JSON.parse(configFile);
}
catch (err)
{
	console.log('There has been an error parsing your JSON.')
	console.log(err);
}

var mysqlConnectionPool = mysql.createPool({
	host: config.database.host,
	user: config.database.username,
	password: config.database.password
});

exports.mysqlConnectionPool = mysqlConnectionPool;