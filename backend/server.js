// sk_test_51OgranI8towiEAgy1imNpjcKEki2oH7IUSWQrgbSawzr2GNfsg4LS4kn9uHvo6o0USWQDQjzFUNDghHq8nK65aPy00CIeK70pn
// Mens Casual Slim Fit : price_1Ogru7I8towiEAgyVeXODq4J
const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
   "sk_test_51OgranI8towiEAgy1imNpjcKEki2oH7IUSWQrgbSawzr2GNfsg4LS4kn9uHvo6o0USWQDQjzFUNDghHq8nK65aPy00CIeK70pn"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
   console.log(req.body);
   const items = req.body;
   let lineItems = [];
   items?.forEach((item) => {
      lineItems.push({
         price_data: {
            currency: "usd",
            product_data: {
               name: item.title,
               images: [item.image],
            },
            unit_amount: item.price * 100, // Stripe expects the amount in cents
         },
         quantity: item.quantity,
      });
   });
   const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/error",
   });
   res.send(
      JSON.stringify({
         url: session.url,
      })
   );
});

app.listen(4000, () => {
   console.log("Server is running on port 4000");
});
