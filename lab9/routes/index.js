const panlindromeRoutes = require("./panlindrome");

const constructorMethod = app => {
  app.use("/", panlindromeRoutes);

  app.use("*", (req, res) => {
    res.redirect("/results/static");
  });
};

module.exports = constructorMethod;
