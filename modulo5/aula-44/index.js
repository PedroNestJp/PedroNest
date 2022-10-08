require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
const modelUser = require('./src/models/user')
app.use(express.json())


app.post('/usuarios', async (req,res)=> {
    let user = new modelUser(req.body);
    console.log(user);
    const result = await user.save()
    res.send(result)
})



app.listen(PORT, ()=> {
 console.log(`listening on port: ${PORT}`);
})