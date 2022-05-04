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

app.get('/productos', async(req, res) => {
    const prods = await archivo.getAll()
    res.send(`el archivo ${prods}`)
})

app.get('/productosRandom', async(req, res) => {
    const prods = await archivo.getAll()
    const random = parseInt(Math.random()*prods.length)
    res.send(`archivo aleatoreo ${prods[random]}`)
})