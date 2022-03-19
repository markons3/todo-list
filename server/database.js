const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:marecare1991@cluster0.ziahc.mongodb.net/todoappDB?retryWrites=true&w=majority`);

        console.log('Connected to the mongoDB!');

    } catch (error) {
        console.log('Could not connect to the mongoDB', error.message)
    }
}