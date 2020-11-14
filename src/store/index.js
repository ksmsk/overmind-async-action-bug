const { merge, namespaced } = require("overmind/config");
const user = require("./user");
const product = require("./product");

module.exports.storeConfig = merge(
  { state: {}, actions: {}, effects: {} },
  namespaced({ user, product })
);
