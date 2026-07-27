const express = require('express');

const app = express();


//app.use("/route" , rh11,rh1,[rh2,rh3],rh4,rh5)

app.use("/user", [ (req, res, next) => {
  //Route Handler
//   res.send("Route Handler 1");
console.log("Handling the route user 1");
next();
//res.send("First response honeyy");
},
(req, res, next) => {
console.log("Handling the route user 2");
//res.send("2nd Response from user 2");
next();
},

(req, res, next) => {
console.log("Handling the route user 3");
//res.send("3rd Response from user 3");
next();
}],[

(req, res, next) => {
console.log("Handling the route user 4");
//res.send("4th Response from user 4");
next();
},

(req, res, next) => {
console.log("Handling the route user 5");
res.send("5th Response from user 5");
// next();
}
])

app.listen(7771,()=>{
        console.log("Server sucessfully listeining on port 7771");
    });
