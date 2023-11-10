const express = require("express");
const app = express();
const path = require("path");
const port = 3000; 
let list = [];
app.get('/hello', (req, res) => {
    res.send({"msg":"Hello world"});
})

app.get('/echo/:id', (req, res) => {
    res.send({"id": req.params.id})
})
app.use(express.json());
app.post("/sum", (req, res) => {
    
})

app.use(express.static(path.join(__dirname, "public")));
/*const routes = require("./routes.js"); 
app.use("/", routes);*/ 

app.post("/list", (req, res) => {
    list.push(req.body.text)
    console.log(list)
    res.send(list)
})



app.listen(port, function(err) {
    if (err) console.log(err);
    console.log("Server is listening to a port", port);
});
//app.use(express.json());
/*app.post('/sum', function (req, res) {
    let sum = 0;
    console.log(req)
    //let numbers = req.Route.numbers
    //console.log("Receiving post request")
    //console.log(numbers)
    //console.log(req.numbers)
    //console.log(req.body.route.numbers)
    //console.log(numbers)
    //numbers.array.forEach(number => {
      //sum += number;
      //console.log(sum)
    //});
    res.send({"sum": sum});
    })
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {

})
let list = []; 

app.post("/list", (req, res) => {
    list.push(req.body)
    res.send(list)
})
//app.listen(port, () => console.log("Server is listening to a port: "+port));
app.listen(port, function(err) {
    if (err) console.log(err);
    console.log("Server is listening to a port", port);
});

module.exports = router*/