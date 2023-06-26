// Import required packages
const express = require('express');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create Express app
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.items;

  const formattedLineItems = line_items.map(
    ({ title, description, price, quantity }) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: title,
            description: description,
          },
          unit_amount: price * 100,
        },
        quantity: quantity,
      };
    }
  );

  const session = await stripe.checkout.sessions.create({
    line_items: formattedLineItems,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/`,
  });

  res.send({ url: session.url });
});

module.exports = router;
