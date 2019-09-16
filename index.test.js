const ShippingEasy = require("./index.js");

const apiSecret = "4289c9406ac501c5b6a780a9418391da359493e6e5eadea998a06a1bc65f5d40";
const apiKey = "2c3b363eee0fa1bb2c76794df68087d1";
// GET /api/orders/1138?api_key=2c3b363eee0fa1bb2c76794df68087d1&api_timestamp=1544303563&api_signature=e2a32cd56bb7d4041449acd793654af2cc90029b9beafc084eb1ace8bb97a472

test("When body provided, generates the same signature the the Ruby API generates", () => {
  const method = "GET"
  const path = "/api/orders/1138"
  const params = {
    "api_timestamp": 1544303563,
    "api_key": apiKey
  }
  const body = "{}"
  const signature = ShippingEasy.sign(apiSecret, method, path, params, body);

  expect(signature).toBe("e2a32cd56bb7d4041449acd793654af2cc90029b9beafc084eb1ace8bb97a472");
});
test("When the body is empty, generates the same signature the the Ruby API generates", () => {
  const method = "GET"
  const path = "/api/orders/1138"
  const params = {
    "api_timestamp": 1544303563,
    "api_key": apiKey
  }
  const body = ""
  const signature = ShippingEasy.sign(apiSecret, method, path, params, body);

  expect(signature).toBe("2dd601cb9f381686ae5ccc1eb614bd7e3310121a391c984f0aeb769b1fd4f9a5");
});
test("When no body provided, generates the same signature the the Ruby API generates", () => {
  const method = "GET"
  const path = "/api/orders/1138"
  const params = {
    "api_timestamp": 1544303563,
    "api_key": apiKey
  }
  const signature = ShippingEasy.sign(apiSecret, method, path, params);

  expect(signature).toBe("2dd601cb9f381686ae5ccc1eb614bd7e3310121a391c984f0aeb769b1fd4f9a5");
});
