const { Router } = require('express');
const Stripe = require("stripe")
const router= Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
  });

router.get("/prices", async(req, res) =>{
    const prices = await stripe.prices.list({
        apiKey: process.env.STRIPE_SECRET_KEY
        
    });
    return res.json(prices)
    
})


router.post("/session", async (req, res) => {
   
    const session = await stripe.checkout.sessions.create(
        {
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: req.body.priceId,
                    quantity: 1
                }
        ],
        success_url: "http://localhost:3000/private/dashboard/",  //si todo sale bien redirigira la sgt pag
        cancel_url: "http://localhost:3000//private/planes", //si todo sale mal, redirigir a otra pag
        
    }, {
        apiKey: process.env.STRIPE_SECRET_KEY,
    })

    return res.json(session);
})

module.exports = router;