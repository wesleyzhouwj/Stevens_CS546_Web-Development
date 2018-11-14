const loginSystemRoutes = require("./loginSystem");

const constructorMethod = app => {
  app.use("/", loginSystemRoutes);

//   app.use("*", (req, res) => {
//     res.redirect("/results/static");
//   });
};

module.exports = constructorMethod;