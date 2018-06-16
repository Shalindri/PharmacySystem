const express = require("express");
var routes = express.Router();

var drugRoutes = require("./Routes/Drug.Route");
//var empRoutes = require("./Routes/Emp.Route");
//var issueRoutes = require("./Routes/Issue.Route");
//var paymentRoutes = require("./Routes/Payment.Route");
//var issuedDrugsRoutes = require("./Routes/IssuedDrugs.Route");
//var logRoutes = require("./Routes/Pass.Route");
//var mailRoutes = require("./Routes/Mail.Route");
//var dutyRoutes = require("./Routes/Duty.Route");

routes.use("/drug", drugRoutes);
//routes.use("/emp", empRoutes);
//routes.use("/issue", issueRoutes);
//routes.use("/payment", paymentRoutes);
//routes.use("/issueddrugs", issuedDrugsRoutes);
//routes.use("/log", logRoutes);
//routes.use("/mail", mailRoutes);
//routes.use("/duty", dutyRoutes);

module.exports = routes;
