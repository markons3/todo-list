const mongoose = require('mongoose');
require("dotenv").config();

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);

        console.log('Connected to the mongoDB!');

    } catch (error) {
        console.log('Could not connect to the mongoDB', error.message)
    }
}