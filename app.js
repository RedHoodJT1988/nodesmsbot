var twilio = require('twilio');
var express =  require('express');

var app = express();

app.get('/receive', (req, res) => {
    res.send('Hi, this is the TwilioBot listening endpoint!');
});

app.listen(8080, () => {
    console.log('TwilioBot listening on port 8080.');
})

var accountSid = 'ACc88275b968236aa8659e1823430b5bf0';
var authToken = 'dc3a4bde284999ee1690a3e3e56e04da';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello, I am here to take over your phone, -TwilioSmsBot',
    to: '+14697761834',
    from: '+18329349236'
})
.then((message) => console.log(message.sid));