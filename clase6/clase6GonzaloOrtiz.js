const express = require('express')
const app = express()

const PORT = 8080

const server = app.listen(PORT,  () => {
    console.log(`servidor http en ${server.address().port}`)
})

server.on("error", error => console.log(`error en el servidor ${error}`))

app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos al Servidor express</h1>')
})

let cantVisitas = 0
app.get('/visitas', (req, res) => {
    cantVisitas++
    res.send(`cantidad de visitas es ${cantVisitas}`)
})

app.get('/fyh', (req, res) => {
    res.send({fechayhora: new Date().toLocaleString()})
})