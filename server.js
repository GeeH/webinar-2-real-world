require('dotenv').config()
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const db = require('./database')

app.use(bodyParser.urlencoded({ extended: true} ))

const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.all('/', async (req, res) => {
    const twiml = new MessagingResponse;
    const number = req.body.From;
    const order = await db.getOrderByPhoneNumber(number)

    if (order) {
        twiml.message(`Your order containing ${order.orderItem} is currently ${order.orderStatus} and is estimated to arrive on ${order.deliveryDate}`)
    } else {
        twiml.message(`We could not find your order. Check online at twilioshoes.com`)
    }

    res.type('xml');
    res.send(twiml.toString());

});

app.all('/orderNumber', async (req, res) => {
    const twiml = new MessagingResponse;
    const number = req.body.Body;
    const order = await db.getOrderByOrderNumber(number)

    if (order) {
        twiml.message(`Your order containing ${order.orderItem} is currently ${order.orderStatus} and is estimated to arrive on ${order.deliveryDate}`)
    } else {
        twiml.message(`We could not find your order. Check online at twilioshoes.com`)
    }

    res.type('xml');
    res.send(twiml.toString());
})


app.listen(3000)
