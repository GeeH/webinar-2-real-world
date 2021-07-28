require('dotenv').config();
const express = require('express')
const app = express();
const twilio = require('twilio')
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.all('/', twilio.webhook(), (req, res) => {

    const twiml = new MessagingResponse;
    twiml.message(`Hi thank you for texting`);

    res.type('xml');
    res.send(twiml.toString());

})

app.listen(3000);
