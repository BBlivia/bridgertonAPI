const { response } = require("express")
const { request } = require("express")
const express = require("express")
const app = express()
const port = 8000

const daphne = {
    "first appearance" : "season 1 ep 1",
             "titles"  : "Dutches of Hastings",
     "Portrayed by"    : "Phoebe Dynevor",
        "images"      :  "images/daphne.jpg"

}

app.get('/', (request, response)=>{
response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    response.json()
})


app.listen(port, (request, response)=>{
    console.log(`the server is now running on ${port}`)
})
