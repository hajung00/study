const express = require("express");
const app = express();
const port = 5000;

const {User}= require("./medels/User");


app.use(express.urlencoded({extended:true}));
app.use(express.json());



const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hajung:gkwjd719@cluster0.mzcwkxu.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log("MongoDb Connected..."))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/api/users/register", (req, res) => {
    console.log(req.body)

const user = new User(req.body)
user.save((err,userInfo)=>{
    if(err) return res.json({success:false,err})
    return res.status(200).json({
        success:true
    })
})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));