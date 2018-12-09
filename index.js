const crypto = require('crypto');

const ShippingEasy = {
  sign: (apiSecret, method, path, params, body) => {

    const normalizedMethod = method.toUpperCase();
    const sortedParamString = Object.keys(params).sort().map(key => {
      return key + "=" + params[key];
    }).join("&");

    const payload = [
      normalizedMethod,
      path,
      sortedParamString,
      body
    ].join("&")

    const hmac = crypto.createHmac("sha256", apiSecret);
    hmac.update(payload, "utf8");
    const signature = hmac.digest("hex");

    return signature;
  }
}

module.exports = ShippingEasy;
