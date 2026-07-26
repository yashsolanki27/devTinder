const express = require('express');

const app = express();

//write route over here before (req, res)  --> "/test"


app.use("/hello", (req,res)=> {
    res.send("Hello hello hellooooo");
})

app.use("/test", (req,res)=> {
    res.send("Testing from the server ");
})
app.use("/", (req,res)=> {
    res.send("Dashboard se bol rhe haii ! YASH JEEEE");
})


app.listen(7771,()=>{
        console.log("Server sucessfully listeining on port 7771");
    });
