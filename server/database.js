const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connected to the mongoDB!');
        
    } catch (error) {
        console.log('Could not connect to the mongoDB', error.message)
    }
}