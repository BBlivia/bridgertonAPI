
const express = require("express")
const app = express()
const cors = require('cors')
const PORT = 8000
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://livBridg1:Bridgerton1@clusterbridgerton.hfgedn9.mongodb.net/?retryWrites=true&w=majority"
app.use(cors())
app.use(express.json())

/*let characters = {
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

        "anthony bridgerton":{
            "first appearance" : "season 1 ep 1",
            "title"             : "The Viscount of Bridgerton",
            "portrayed by"      : "Johnathan Bailey"
        }, 

        "eloise bridgerton":{
            "first appearance" : "season 1 ep 1",
            "title"             : "none",
            "portrayed by"      : "Claudia Jessie"
        },

        "marina crane":{
            "first appearance"  : "season 1 ep 1",
            "title"             : "none",
            "portrayed by"      : "Ruby Barker"
        },

        "marina crane":{
            "first appearance"  : "season 1 ep 1",
            "title"             : "none",
            "portrayed by"      : "Ruby Barker"
        },

        "penelope featherington":{
            "first appearance"  : "season 1 ep 1",
            "title"             : "none",
            "portrayed by"      : "Nicola Coughlan"
        }

}
*/


MongoClient.connect(connectionString)
    .then(client =>{
    //if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('bridgerton1')
    const characterCollection = db.collection('bridgertonCharacters2')
    

    app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
    })

    //app.get('/api', (request,response)=>{
       // response.json()
    
    //})

    app.get('/api/:name', (request, response)=>{
        const charactersName = request.params.name.toLowerCase()
        characterCollection.find({name:charactersName}).toArray()
            .then(results =>{
                console.log(results)
                response.json(results[0])
             })
        
            .catch(error => console.error(error))
        
    })
    
   
    
 })
 .catch(error => console.error(error))

 app.listen(process.env.PORT || PORT ,(request, response)=>{
    console.log(`the server is now running on ${PORT}`)
})
 //.catch(error => console.error(error)) 




   
    









