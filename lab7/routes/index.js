const recipesData = require("./recipes");

const constructorMethod = app => {
  app.use("/", recipesData);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;