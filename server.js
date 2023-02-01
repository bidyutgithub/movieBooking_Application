const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

const serverConfig = require("./configs/server.config")
const dbConfig = require("./configs/db.config")
const constants = require("./utils/constants")

const app = express();
app.use(bodyParser.json());

mongoose.connect(dbConfig.DB_URL,()=>{
     console.log("connected to MongoDB")
  },err=>{
     console.log("Error: ", err.message)
  }
);

require("./routes/movie.routes")(app);
require("./routes/theater.routes")(app);

app.get("/",(req,res)=>{
    res.send("Inside Movie Booking Application");
})

app.listen(8000,()=>{
    console.log(`Application running on port 8000`)
})