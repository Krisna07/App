const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { errorHandler } = require("./Middleware/errorMiddleware");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
// app.use(bodyParser());

const port = process.env.PORT || 5000;

const connectDB = require("./Config/db");
connectDB();
const uri = process.env.ATLAS_URI;
app.use("/api/users", require("./Routes/userRoute"));
app.use("/api/account", require("./Routes/AccountRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running at port :${port}`);
});
