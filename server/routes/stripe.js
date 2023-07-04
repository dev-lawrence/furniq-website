// Import required packages
const express = require('express');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create Express app
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.items;
  console.log(line_items);

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
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'NG'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Free shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'usd',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],

    phone_number_collection: {
      enabled: true,
    },

    line_items: formattedLineItems,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/`,
  });

  res.send({ url: session.url });
});

module.exports = router;
