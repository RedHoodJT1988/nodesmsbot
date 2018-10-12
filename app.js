var twilio = require('twilio');
var express =  require('express');

var app = express();

app.get('/receive', (req, res) => {
    res.send('Hi, this is the TwilioBot listening endpoint!');
});

app.post('/receive', (req, res) => {
    let twiml = new twilio.TwimlResponse();
    var feedback = BotBrains(req.body);
    twiml.message(feedback)

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.listen(process.env.port, () => {
    console.log('TwilioBot listening on port 8080.');
})

var accountSid = 'ACc88275b968236aa8659e1823430b5bf0';
var authToken = 'dc3a4bde284999ee1690a3e3e56e04da';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello, I am here to take over your phone, -NodeBot',
    to: '+12094041855',
    from: '+18329349236'
})
.then((message) => console.log(message.sid));