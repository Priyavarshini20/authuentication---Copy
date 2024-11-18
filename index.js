// import mongoose
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

// connect toi the database
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
     console.log('connected the database!');


// listen for requests
app.listen(3001, () => {
    console.log('server is running @ http://localhost:3001');
});
})

.catch((error) => {
    console.log('connection failed!');
    console.log(error);
})

