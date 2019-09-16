const crypto = require('crypto');

const ShippingEasy = {
  sign: (apiSecret, method, path, params, body) => {

    const normalizedMethod = method.toUpperCase();
    const sortedParamString = Object.keys(params).sort().map(key => {
      return key + "=" + params[key];
    }).join("&");

    const payloadParts = [
      normalizedMethod,
      path,
      sortedParamString
    ]
    if (body && body.length > 0){
      payloadParts.push(body)
    }
    const payload = payloadParts.join("&")

    const hmac = crypto.createHmac("sha256", apiSecret);
    hmac.update(payload, "utf8");
    const signature = hmac.digest("hex");

    return signature;
  }
}

module.exports = ShippingEasy;
