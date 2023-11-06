const express = require("express");
const app = express();
const port = 3000; 
app.get('/hello', (req, res) => {
    res.send({"msg":"Hello world"});
})

app.listen(port, () => console.log("Server is listening to a port: "+port));

app.get('/echo/:id', (req, res) => {
    res.send({"id": req.params.id})
})

app.post('/sum', (req, res) => {
    let sum =0;
    let numbers = req.numbers;
    numbers.array.forEach(number => {
        sum += numbers;
    });
    res.send({"sum": sum});

    })