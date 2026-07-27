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

// app.patch("/user", (req,res)=>{
//       res.send("Data partially updated successfully !! Have funn!!");
// })


// app.put("/user", (req,res)=>{
//       res.send("Data properly updated successfully !! Savarikaaaa  !!");
// })


// //this will only handle GET call to /user
// app.get("/user", (req,res)=>{
//       res.send({first_name: "Yash", second_name: "Solanki"});
// })

// app.post("/user", (req,res)=>{
// //saving data to db
//       res.send("Data saved successfully,, enjoyy!!");
// })

// app.delete("/user", (req,res)=>{
//       res.send("Data deleted successfully !!");
// })

// //this will match all the HTTP method API calls to /test
// app.use("/test", (req,res)=> {
//     res.send("Testing from the server ");
// })

//b is optional over here  worked in express 4
// app.get("/ab?c", (req,res)=>{
//     res.send({first_name : "Yash", last_name: "Solanki"});
// });

//as per express 5  for regural expression

// app.get("/ac", (req,res)=>{
//     res.send({first_name : "Yash", last_name: "Solanki"});
// });

// app.get("/abc", (req,res)=>{
//     res.send({first_name : "Yash", last_name: "Solanki"});
// });
// //Regex regularexpressionnn
// app.get(/a/, (req,res)=>{
//     res.send({first_name : "Yash", last_name: "Solanki"});
// });

//complex Regex
// app.get(/.*fly$/, (req,res)=>{
//     res.send({first_name : "Yash", last_name: "Solanki"});
// });



// app.get("/user", (req,res)=>{
//     console.log(req.query);
//     res.send({first_name : "Yash", last_name: "Solanki"});
// });


//dynamic route
app.get("/user/:userid/:name/:password", (req,res)=>{
    console.log(req.params);
    res.send({first_name : "Yash", last_name: "Solanki"});
});


























// const {adminAuth , userAuth} = require("./middlewares/auth")

//  //Handle auth Middleware for all requests GET POST PUT PATCH DELETE
// app.use("/admin" , adminAuth );
// //app.use("/admin" , userAuth );

// app.post("/user/login" , (req,res)=>{
//     res.send("User login successfully");
// })

// app.get("/admin/getAllData" ,  (req, res)=>{
//     // const token = "xyz" ;
//     // const isAdminAuthorized = token === "xyz";
//     // if(isAdminAuthorized){
//     // res.send("Here is all requested data");
//     // }
//     // else {
//     //     res.status(401).send("Unauthorized request")
//     // }
//         res.send("All Data sent");
// })

// app.get("/User" ,userAuth ,  (req, res)=>{
//       res.send(" New super user");
// })

// app.get("/admin/deleteUser" ,  (req, res)=>{
//       res.send("Deleted a user");
// })


app.listen(7771,()=>{
        console.log("Server sucessfully listeining on port 7771");
    });
