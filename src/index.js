const { createOvermindSSR } = require("overmind");
const { storeConfig } = require("./store");

async function run() {
  const overmind = createOvermindSSR(storeConfig);
  await overmind.actions.user.setFirstname();
  await overmind.actions.product.setItems();
  overmind.actions.user.setLastname();

  console.log(overmind.hydrate());
}

run();
