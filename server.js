const express = require('express');
const mongoose = require('mongoose');
const serverConfig = require("./configs/server.config");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");


const dbConfig = require("./configs/db.config");
const constants = require("./utils/constants");
const User= require('./models/user.model');

const notificationClient = require("./utils/NotificationClient");
 notificationClient.sendEmail(["bidyut.sahoo73@gmail.com"],"Test",'<h1>Hello from bidyut</h1> <img src ="https://1.bp.blogspot.com/-lcq0ORGm34E/X8zY0FuPEdI/AAAAAAAADuk/QT-mPIC2Jw0wh8FkiAVXuR6e8ghqa5QhwCLcBGAsYHQ/s0/HDgallery%2BMr%2BMajnu%2BStills%2B20.jpeg"/>',null);


 const app = express();
 
 app.use(bodyParser.json());


 mongoose.connect("mongodb://127.0.0.1:27017/movie-booking-application",
    console.log("mongodb database connected"))

// mongoose.connect(dbConfig.DB_URL,()=>{
//      console.log("connected to MongoDB")
//      init();
//   },err=>{
//      console.log("Error: ", err.message)
//   }
// );

require("./routes/movie.routes")(app);
require("./routes/theater.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app); 
require("./routes/booking.routes")(app);
require("./routes/payment.routes")(app);

app.get("/",(req,res)=>{
    res.send("Inside Movie Booking Application");
})

app.listen(4800,()=>{
    console.log(`Application running on port 3000`)
})

async function init(){

    try{
        const user = await User.create({
            name:"admin",
            userId:"admin",
            email:"admin@gmail.com",
            password:bcrypt.hashSync("admin",10),
            userStatus:constants.userStatus.approved,
            userTypes:constants.userTypes.admin
        });

        console.log("Admin user created successfully");
    }catch(err){
        console.log(err.message);
    }

}
