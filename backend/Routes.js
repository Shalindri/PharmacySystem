const express = require("express");
var routes = express.Router();

var drugRoutes = require("./Routes/Drug.Route");
var empRoutes = require("./Routers/Emp.Route");
var issueRoutes = require("./Routers/Issue.Route");
var paymentRoutes = require("./Routers/Payment.Route");
var issuedDrugsRoutes = require("./Routes/IssuedDrugs.Route");

routes.use("/drug", drugRoutes);
routes.use("/emp", empRoutes);
routes.use("/issue", issueRoutes);
routes.use("/payment", paymentRoutes);
routes.use("/issueddrugs", issuedDrugsRoutes);

module.exports = routes;