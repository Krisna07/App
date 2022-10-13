const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());

const uri = process.env.ATLAS_URI;
// mongoose
//   .connect(uri, { useNewUrlParser: true })
//   .catch((err) => {
//     console.error(err.stack);
//     process.exit(1);
//   })
//   .then((async) => {
app.listen(port, () => {
  console.log(`server running at port :${port}`);
});
//   });

app.use("/api/users", require("./Routes/userRoute"));
app.use("/api/signup", require("./Routes/userRoute"));
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDb database connection created");
// });
