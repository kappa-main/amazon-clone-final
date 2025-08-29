const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
// Stripe initialized with .env file (see below)
require("dotenv").config({ path: require("path").join(__dirname, ".env") });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", function (req, res) {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  //Ok-created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

//example endpoint
// http://127.0.0.1:5001/challenge2-5e031/us-central1/api
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
