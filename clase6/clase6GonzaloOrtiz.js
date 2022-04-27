const express = require('express')
const Contenedor = require('./Contenedor.js')
const app = express()

const PORT = 8080

const server = app.listen(PORT,  () => {
    console.log(`servidor http en ${server.address().port}`)
})

server.on("error", error => console.log(`error en el servidor ${error}`))

app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos al Servidor express</h1>')
})

const archivo = new Contenedor('./productos.txt')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.get('/productos', (req, res) => {
    const aux = archivo.getAll()
    res.send(`el archivo ${aux}`)
})

app.get('/productosRandom', (req, res) => {
    const aux = archivo.getAll()
    const aux2 = archivo.getById(getRandomInt(1, aux.length+1))
    res.send(`archivo aleatoreo ${aux2}`)
})