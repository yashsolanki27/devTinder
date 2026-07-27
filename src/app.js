const express = require('express');

const app = express();

app.get("/getUserData" , (req, res)=>{
    try{
     //logic of db call and get user data
    throw new error("asdh");
    res.send(" User data sent");
    }
    catch (err){
    res.status(500).send("Something went wrong never try again ever and never say ever");
    }


});

app.use("/" , (err, req, res, next)=>{
     if(err){
        //log your user
     res.status(500).send("Something went wrong never try again");
     }
});

app.listen(7771,()=>{
        console.log("Server sucessfully listeining on port 7771");
    });
