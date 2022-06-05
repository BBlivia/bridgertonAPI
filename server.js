const express = require("express")

app.get('/', (request, response)=>{
response.sendFile(__dirname + '/index.html')
})

