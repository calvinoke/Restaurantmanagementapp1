const mongoose = require('mongoose');

//connecting to mongodb atlas database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017")
.then(() => console.log('Mongodb  Connection is successful'))
.catch((err) => console.error(err));

const db = mongoose.connection
module.exports = db