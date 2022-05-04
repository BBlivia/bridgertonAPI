const { response } = require("express")
const { request } = require("express")
const express = require("express")
const app = express()
const port = 8000

const characters = {
        "Daphne" : {
            "first appearance": "season 1 ep 1",
             "titles"         : "Dutches of Hastings",
            "Portrayed by"    : "Phoebe Dynevor",
                "images"      :  "images/daphne.jpg"

        },

        "Simon" :{
            "first appearance" : "season 1 ep 1",
            "title"            : "Duke of Hastings",
            "portrayed by"     : "Regé-Jean Page",
           " images"           : 'images/simon.jpg'
        },

        "Unknown" :{
            "first appearance" : "NA",
            "title"            : "NA",
            "portrayed by"     : "NA",
           " images"           : 'Na'
        }


}

app.get('/', (request, response)=>{
response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    response.json(characters)
})


app.listen(port, (request, response)=>{
    console.log(`the server is now running on ${port}`)
})
