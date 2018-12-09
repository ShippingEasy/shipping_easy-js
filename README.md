# shipping_easy-js
Official ShippingEasy API client for JavaScript

## Status

This package is a work in progress. It is being released _very_ early to provide
access to the `ShippingEasy.sign()` function. It is worth releasing on its own,
since every call to the ShippingEasy API requires an `api_signature`, and it can
be difficult to generate correctly.


### sign()

```
const ShippingEasy = require("./index.js");

// customer credentials
const apiKey = "xxxx";
const apiSecret = "xxxx";

const params = {
  api_timestamp: Math.floor(Date.now() / 1000),
  api_key: apiKey
}

const signature = ShippingEasy.sign(apiSecret, "GET", "/api/orders/1138", params, body);

params["api_signature"] = signature

// use params as the query string for your API calls
```
