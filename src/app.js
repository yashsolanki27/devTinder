const express = require('express');

const app = express();

const {adminAuth , userAuth} = require("./middlewares/auth")

 //Handle auth Middleware for all requests GET POST PUT PATCH DELETE
app.use("/admin" , adminAuth );
//app.use("/admin" , userAuth );

app.post("/user/login" , (req,res)=>{
    res.send("User login successfully");
})

app.get("/admin/getAllData" ,  (req, res)=>{
    // const token = "xyz" ;
    // const isAdminAuthorized = token === "xyz";
    // if(isAdminAuthorized){
    // res.send("Here is all requested data");
    // }
    // else {
    //     res.status(401).send("Unauthorized request")
    // }
        res.send("All Data sent");
})

app.get("/User" ,userAuth ,  (req, res)=>{
      res.send(" New super user");
})

app.get("/admin/deleteUser" ,  (req, res)=>{
      res.send("Deleted a user");
})



app.listen(7771,()=>{
        console.log("Server sucessfully listeining on port 7771");
    });
