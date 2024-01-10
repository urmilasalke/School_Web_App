const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use((req: any, res: any, next: any) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch(() => {
    console.log("error");
  });

app.use("/getdata", require("./routes/Admission"));
// app.use("/", require("./routes/Contactus"));

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
