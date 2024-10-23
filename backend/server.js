require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

require("./database/createTables");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
