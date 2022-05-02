const { response } = require("express")
const { request } = require("express")
const express = require("express")
const app = express()
const port = 8000

app.get('/', (request, response)=>{
response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    response.json()
})


app.listen(port, (request, response)=>{
    console.log(`the server is now running on ${port}`)
})
