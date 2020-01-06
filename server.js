//require express for routing & server stuff
const express = require("express");
const app = express();

//require routes folder
const routes = require("./routes")

//require mongoose for mongodb interaction
const mongoose = require("mongoose");

//define port server to run on
const PORT = process.env.PORT || 3001;

//define middleware 
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//serve static assets if production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//use routes folder in middleware
app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gata");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})