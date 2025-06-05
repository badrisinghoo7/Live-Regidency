const express = require('express');
const { connect } = require('./db/db');
const { Profilerouter } = require('./routes/profile.route');

const app = express();


app.use(express.json());

app.use('/profile', Profilerouter);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});



app.listen(8080,async()=>{
    try {
        await connect;
        console.log('Connected to MongoDB');
        console.log('Server is running on port 8080');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
})


