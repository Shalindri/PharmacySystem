const express = require("express");
var routes = express.Router();

var drugRoutes = require("./Routers/Drug.Route");
//var empRoutes = require("./Routers/Emp.Route");
//var issueRoutes = require("./Routers/Issue.Route");
//var paymentRoutes = require("./Routers/Payment.Route");

routes.use("/drug", drugRoutes);
//routes.use("/emp", empRoutes);
//routes.use("/issue", issueRoutes);
//routes.use("/payment", paymentRoutes);

module.exports = routes;
