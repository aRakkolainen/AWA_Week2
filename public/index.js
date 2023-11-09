const button = document.getElementById("submit-data");
const inputText = document.getElementById("input-text");
button.addEventListener("click", () => {
    //let input = {"text": inputText.value}
    // Sending POST request: https://www.youtube.com/watch?v=xJAxjstgITk 
    fetch("http://localhost:3000/list", 
    {method: 'POST',
    headers: {
        "Content-type": "application/json"
    }, 
    body: '{"text": "' + inputText.value + '"}'
    })
    .then(results => results.json())
    .then(console.log);
})