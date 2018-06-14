const express = require("express");
var routes = express.Router();

var drugRoutes = require("./Routes/Drug.Route");
//var empRoutes = require("./Routes/Emp.Route");
var issueRoutes = require("./Routes/Issue.Route");
//var paymentRoutes = require("./Routes/Payment.Route");
var issuedDrugsRoutes = require("./Routes/IssuedDrugs.Route");

routes.use("/drug", drugRoutes);
//routes.use("/emp", empRoutes);
routes.use("/issue", issueRoutes);
//routes.use("/payment", paymentRoutes);
routes.use("/issueddrugs", issuedDrugsRoutes);

module.exports = routes;
