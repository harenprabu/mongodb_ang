const express = require('express');
const ConnectDB = require('./connection');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({message:"Success"});
});

app.get('/home',(req,res)=>{
    res.send("<h2>Welcome Home</h2>");
});

const PORT = process.env.PORT || 4321;
app.listen(PORT,()=>{
    console.log("Server Started");
    ConnectDB()
    .then(()=>{
        console.log("DB Connection Established");
    })
    .catch(()=>{
        console.log("Connection Error");
    

    })
})