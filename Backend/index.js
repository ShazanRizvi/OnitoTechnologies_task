const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 8088;

app.use(express.json());
app.use(cors());

//available routes
app.use("/api", require("./routes/users"));
app.use("/api",require("./routes/users"))

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
connectToMongo();
