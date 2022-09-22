const express = require("express");
const cors=require("cors");
const app = express();
const db_connect=require("./db_connect");
require("dotenv").config()
db_connect();
app.use(express.json());
app.use(cors());
app.use("/idea", require("./routes/ideasRoute"));
app.use("(/user)", require("./routes/user"));
app.use("(/notification)", require("./routes/notification"));
app.use("(/userNotification)", require("./routes/Usernotification"));

app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);