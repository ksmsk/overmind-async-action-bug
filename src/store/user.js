const { sleep } = require("../helpers");

module.exports = {
  state: {
    firstname: "",
    lastname: "",
  },
  actions: {
    setFirstname: async ({ state }) => {
      await sleep(500);
      state.firstname = "John";
    },

    setLastname: ({ state }) => {
      state.lastname = "Doe";
    },
  },
};
