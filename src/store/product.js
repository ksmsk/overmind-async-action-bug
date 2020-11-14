const { sleep } = require("../helpers");

module.exports = {
  state: {
    items: [],
  },
  actions: {
    setItems: async ({ state }) => {
      await sleep(500);
      state.items = [1, 2, 3, 4];
    },
  },
};
