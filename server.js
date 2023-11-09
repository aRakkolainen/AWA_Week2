const express = require("express");
const app = express();
const path = require("path");
const router = express.Router(); 
const port = 3000; 
app.get('/hello', (req, res) => {
    res.send({"msg":"Hello world"});
})

app.get('/echo/:id', (req, res) => {
    res.send({"id": req.params.id})
})
app.use(express.json());
app.post('/sum', function (req, res) {
    let sum =0;
    //let numbers = req.body
    console.log("Receiving post request")
    console.log(req.route)
    //console.log(req.body.route.numbers)
    //console.log(numbers)
    //numbers.array.forEach(number => {
      //  sum += number;
    //});
    //res.send({"sum": sum});
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

module.exports = router