const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { errorHandler } = require("./Middleware/errorMiddleware");

require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
app.use("/api/users", require("./Routes/userRoute"));
app.use(errorHandler);
// mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .catch((err) => {
//     console.error(err.stack);
//     process.exit(1);
//   })
//   .then((async) => {
app.listen(port, () => {
  console.log(`server running at port :${port}`);
});
// });
