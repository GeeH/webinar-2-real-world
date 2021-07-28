Recap

A mega quick recap of the first webinars principles. Make sure you don't spend more than 3-4 minutes on this, and link to the VOD for the first webinar in an early slide. Encourage people to go back watch the first webinar and then this one if they struggle at any point.
Securing Webhooks

We're only talking about how to check your webhook requests are coming from Twilio. Because we're relying on information delivered in the payload of the webhook request, it's possible for bad actors to cause unwanted actions on your app by crafting and delivering webhook requests with creative data. We can stop this from happening by verifying requests come from Twilio and ensuring all webhooks are delivered by HTTPS.

Talk about how this works from this page https://www.twilio.com/docs/usage/webhooks/webhooks-security; explain that we take the payload of the GET/POST request along with the URL and SHA1 it with your shared secret which is the auth token for the account. The resultant hash should match the contents of the X-Twilio-Signature header. We should do this on every request to check it's come from Twilio.

Explain that if you're using one of the language sdk's you get this much easier with the validator.
DEMO - Securing Webhooks

Show how in JavaScript/Express, you can just add the twilio.webhook() method as the second parameter of your route definition to secure the route. javascript/demo-1.js

Talk through how you can use the library yourself to show what data you need to marshall. javascript/demo-2.js - it's important we show how to do this by hand so people can understand how to protect webhooks in langauges aside from Express/Node.

Blog post to show if you like: https://www.twilio.com/blog/how-to-secure-twilio-webhook-urls-in-nodejs
Dynamic Data

It's easy to reply to a text saying "Hello", but in the real world we almost certainly want to interact with our existing systems to give our customers the contextual information that they want. This means that we'll probably want to hit the database (or an API) looking up some data that the user gives to us. This demo uses a fake database wrapper, its assumed developers will already have an ORM or similar connection to their database!
DEMO - Dynamic Data

Demo how we can take some data from the payload Twilio sends us, and use it to lookup something from the database. In the sample code we assume that the incoming message number is a unique identifier of the order (which is a little wooly), and return the order status if we find it. The key takeaway from this demo is that webhooks give you the power of interacting with existing data systems, especially easy if you're already building a webapp!

Make sure to at least mention securing the webhook now that we've told devs they should!

It's also possible to show that the user can message in an order number as the message body. Be careful here, it opens the door to people messaging predictable data to reveal other users info.

    We probably want to combine telephone number with the order number (PR welcome).

    javascript/demo-3-database.js
    javascript/demo-3-server.js

The key takeaway is that we can grab data from the webhook payload and use it to identify stuff in our systems.
Triggering Messages

A very popular use case is to send a message on the morning of an appointment, or when the status of a shipment changes. We can do the former with Cron jobs (and the latter with event handlers).

Explain what a cron job is, and easy ways to trigger them https://www.twilio.com/blog/4-ways-to-schedule-node-code.
DEMO - Triggering Message

We want to talk about how we can send messages on a schedule for common use cases. This demo hits an API that returns a list of appointments for the day and sends them an SMS to remind them. The api can be found here:

https://26az97jeuk.execute-api.us-east-1.amazonaws.com/

You can pass the following parameters:

    number (default 1): the number of appointments to return; max 9
    phone_number: if passed will return that phone number for each appointment so you can send a real text, if not defaults to a fake phone number

    The demo is done is Twilio Functions which isn't ideal as it's activated via HTTP request

Rapid Prototyping with Studio

We cover this in the video above, but I don't think it's a good fit so removed it from this playbook.

### Wrapup

Brief overview of what we've covered today.
