const functions = require("firebase-functions");
const express =  require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51JDxJLCQ9n0Z8ZFpp5IfFgScU87AM5vMc3O5Y5BwRT5ZW7MfbMnJ2cAwEKK5F7VCRJStwFc6VHUiTLoSVnmLTaG600S90mtOe5')

// API

// App config
const app = express();

// Middle wares
// cors = security
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    // or req.params
    const total = request.query.total;

    console.log('Payment request recieved!!! Took yo money bitchh>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})

// Listen command
// To get a backend express running on cloud function
exports.api = functions.https.onRequest(app)

// Example endpoint 
// http://localhost:5001/nozama-53fd6/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Build an express app and host in a cloud function