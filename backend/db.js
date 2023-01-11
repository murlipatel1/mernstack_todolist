const mongoose = require('mongoose')

// const mongooseURL = "mongodb+srv://patelmurli15:ramsita28@clustermurli.uytkatj.mongodb.net/test"
const mongooseURL = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1"

const connectToMongo = () =>{

    mongoose.connect(mongooseURL ,()=>{
        console.log("MongoDb")
    })
}

module.exports = connectToMongo;