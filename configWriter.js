var fs = require('fs');

var options = {
	database: {
		host: 'localhost',
		username: 'root',
		password: '',
		dbname: 'criticalmass'
	},
	glympse: {
		apiKey: '',
		baseUrl: 'http://api.sandbox.glympse.com/',
		apiUsername: '',
		apiPassword: '',
		interval: 20000
  	},
	imap: {
		username: 'glympse-invitations@criticalmass.in',
		password: '',
		host: 'mail.caldera.cc',
		port: 993,
		tls: true,
		mailboxInbox: 'INBOX',
		mailboxDone: 'INBOX.Done',
		mailboxFailure: 'INBOX.Failure'
	},
	server: {
		port: 1337
	},
	positionCache: {
		ttl: 10,
		period: 15
	},
	tls: {
		key: 'server.key',
		crt: 'server.crt',
		ca: null
	}
};

var data = JSON.stringify(options);

fs.writeFile('./config.json', data, function (err) {
  if (err) {
    console.log('There has been an error saving your configuration data.');
    console.log(err.message);
    return;
  }
  console.log('Configuration saved successfully.')
});