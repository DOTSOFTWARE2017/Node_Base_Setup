const express = require("express");
const app = express();
const dbcon = require("./config/config");
const bodyParser = require("body-parser");
const index=require('./routes/Routes.home')
const allusersvalue=require('./routes/userRoutes')
app.use(bodyParser.json());


app.use('/api/users',allusersvalue)
dbcon.query("SELECT * FROM login", function (err, result, fields) {
  if (err) throw err;
  console.log("Db coonnect");
});

app.use('/api',index)


app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
app.listen(5000, () => {
  console.log("Server is Online Port:5000 ");
});
