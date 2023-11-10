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
    if (req.body.text != "null") {
        list.push(req.body.text)
        res.send({"list": list})
    }
    //console.log(req.body.text)
    //list.push(req.body.text)
    //console.log(list)
    //res.send(list)
})



app.listen(port, function(err) {
    if (err) console.log(err);
    console.log("Server is listening to a port", port);
});
