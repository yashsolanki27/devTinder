const express = require('express');
const app = express();
//GET  /users => middleware chain => request handler --top to bottom

app.use("/user",
    (req, res, next) => {
        //res.send("Handling route");
     next();
    },
    (req, res, next) => {
      res.send("First route handler honeyy 1sttttttttt");
    },
    (req, res, next) => {
    res.send("Second route handler honeyy");
     }
);

app.listen(7771,()=>{
        console.log("Server sucessfully listeining on port 7771");
    });
