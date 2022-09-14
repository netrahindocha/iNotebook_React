const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"


const connectToMongo = async() => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo successfully");
    })
}

module.exports = connectToMongo;