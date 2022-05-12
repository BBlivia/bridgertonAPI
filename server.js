const { response } = require("express")
const { request } = require("express")
const express = require("express")
const app = express()
const port = 8000

const characters = {
        "daphne bridgerton" : {
            "first appearance": "season 1 ep 1",
             "titles"         : "Dutches of Hastings",
            "portrayed by"    : "Phoebe Dynevor",
             

        },

        "simon basset" :{
            "first appearance" : "season 1 ep 1",
            "title"            : "Duke of Hastings",
            "portrayed by"     : "Regé-Jean Page",
         
        },

        "unknown" :{
            "first appearance" : "NA",
            "title"            : "NA",
            "portrayed by"     : "NA",
           " images"           : 'Na'
        },

        "kate sharma" :{
            "first appearance" : "season 2 ep 1",
            "title"            : "The Viscountess of Bridgerton",
            "portrayed by"     : " Simone Ashley",
         
        },

<<<<<<< HEAD
        "anthony bridgerton " :{
            "first appearance" : "season 1 ep 1",
            "title"            : "The Viscountess of Bridgerton",
            "portrayed by"     : "Johnathan Bailey",
         
        },

        
=======
>>>>>>> 9bda4f0e0fe928adba328dd5e857afe7007905aa
     



}

app.get('//', (request, response)=>{
response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }

})


app.listen(port, (request, response)=>{
    console.log(`the server is now running on ${port}`)
})
