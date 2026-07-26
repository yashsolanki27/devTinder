const express = require('express');

const app = express();

// Routes -- When a user visits a specific URL, execute some code.
// app.use("URL", function(req,res){
// })
//order is imp of write route
//order of the routes matter alotttttttttttttttttttttt
//write route over here before (req, res)  --> "/test"
//first route       handler


// //browser worst way to test your api my friendddddddddd
// app.use("/hello/2", (req,res)=> {
//     res.send("bhuii bioosieieuii");
// })

// app.use("/hello", (req,res)=> {
//     res.send("Hello hello hellooooo");
// })


// app.use("/", (req,res)=> {
//     res.send("Dashboard se bol rhe haii ! YASH JEEEE");
// })

// app.use("/user", (req,res)=>{
//       res.send("AHAHAHAHAHAHAHAA");
// })

app.patch("/user", (req,res)=>{
      res.send("Data partially updated successfully !! Have funn!!");
})


app.put("/user", (req,res)=>{
      res.send("Data properly updated successfully !! Savarikaaaa  !!");
})


//this will only handle GET call to /user
app.get("/user", (req,res)=>{
      res.send({first_name: "Yash", second_name: "Solanki"});
})

app.post("/user", (req,res)=>{
//saving data to db
      res.send("Data saved successfully,, enjoyy!!");
})

app.delete("/user", (req,res)=>{
      res.send("Data deleted successfully !!");
})

//this will match all the HTTP method API calls to /test
app.use("/test", (req,res)=> {
    res.send("Testing from the server ");
})


app.listen(7771,()=>{
        console.log("Server sucessfully listeining on port 7771");
    });
