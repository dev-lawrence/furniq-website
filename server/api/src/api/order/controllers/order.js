// @ts-nocheck
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
("use strict");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { items } = ctx.request.body;

    const lineItems = await Promise.all(
      items.map(async (item) => {
        const productItem = await strapi
          .service("api::product.product")
          .findOne(item.id);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: productItem.title,
            },
            unit_amount: productItem.price * 100,
          },
          quantity: item.quantity,
        };
      })
    );

    try {
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "NG"],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: {
                amount: 0,
                currency: "usd",
              },
              display_name: "Free shipping",
              delivery_estimate: {
                minimum: {
                  unit: "business_day",
                  value: 5,
                },
                maximum: {
                  unit: "business_day",
                  value: 7,
                },
              },
            },
          },
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: {
                amount: 1500,
                currency: "usd",
              },
              display_name: "Next day air",
              delivery_estimate: {
                minimum: {
                  unit: "business_day",
                  value: 1,
                },
                maximum: {
                  unit: "business_day",
                  value: 1,
                },
              },
            },
          },
        ],

        phone_number_collection: {
          enabled: true,
        },

        line_items: lineItems,
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/`,
      });

      // Calculate the total price based on the line items
      const totalPrice = lineItems.reduce(
        (accumulator, item) =>
          accumulator + item.price_data.unit_amount * item.quantity,
        0
      );

      await strapi.service("api::order.order").create({
        data: {
          items,
          sessionId: session.id,
          totalPrice: totalPrice / 100,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      console.error("Error creating checkout session:", error);
      // Handle error case
      ctx.throw(500, "An error occurred while creating the checkout session.");
    }
  },
}));
