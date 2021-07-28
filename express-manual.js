const twilio = require('twilio');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sms', (req, res) => {
    const twilioSignature = req.headers['x-twilio-signature'];
    const params = req.body;
    const url = 'https://your-webhook-endpoint.io';

    const requestIsValid = twilio.validateRequest(
        process.env.TWILIO_AUTH_TOKEN,
        twilioSignature,
        url,
        params
    );

    if (!requestIsValid) {
        return res.status(401).send('Unauthorized');
    }

    // write to a database, call other services, ...
    // then respond to the message!
    res.set({
        'Content-Type': 'text/plain'
    });
    res.send("You're allowed!");
});

app.listen(
    port,
    () => console.log(`Example app listening on port ${port}!`)
);
