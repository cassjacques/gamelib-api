const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/gamelib-1207';

mongoose.connect(connectionString)
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log(err))

module.exports = {
    Game: require('./Game'),
}