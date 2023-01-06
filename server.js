//sk_test_51MN0eNJ3SajjLN9dk1HUZ0WyqX9cMY6nY39AydPBJzeht7KYgffDSeWivBwMHeKVGkNec7xPssVcEiseQSap3BZN00yehl5bjt

// Coffee: price_1MN0iFJ3SajjLN9d75b7LPTk
// Sunglasses: price_1MN0jZJ3SajjLN9dxMSDUVqV
// camera: price_1MN0kOJ3SajjLN9dWbnCDPpm

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MN0eNJ3SajjLN9dk1HUZ0WyqX9cMY6nY39AydPBJzeht7KYgffDSeWivBwMHeKVGkNec7xPssVcEiseQSap3BZN00yehl5bjt');

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post("/checkout", async (req, res) => {

    /*
    req.body.items 
[
    {
        id: 1,
        quantity: 3

    },
]

stripe wants
[
    {
        prise: 1,
        quantity: 3

    },
]

    */
    console.log(request.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        );
    });
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'https://localhost:3000/success',
        cancel_url: 'https://localhost:3000/cancel'
    });

    res.send(JSON.stringify({
        url: session.url
    }));




});

app.listen(4000, () => console.log('listening on port 4000'))


