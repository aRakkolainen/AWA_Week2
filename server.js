const express = require("express");
const app = express();
const router = express.Router(); 
const port = 3000; 
app.get('/hello', (req, res) => {
    res.send({"msg":"Hello world"});
})

app.listen(port, () => console.log("Server is listening to a port: "+port));

app.get('/echo/:id', (req, res) => {
    res.send({"id": req.params.id})
})

router.post('/sum', (req, res) => {
    let sum =0;
    let numbers = req.body.route.numbers
    //console.log(req.body.route.numbers)
    //console.log(numbers)
    numbers.array.forEach(number => {
        sum += number;
    });
    res.send({"sum": sum});
    })