const express = require('express')
const {Router} = express
const multer = require('multer')

const Api = require('./Api.js')


const app = express()

app.use(express.urlencoded({extended: true}))
app.use('/api', express.static('public'))

const archivo = new Api()


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'uploads')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage: storage})

//endpoints

//productos

const routerProductos = new Router()
routerProductos.use(express.json())

routerProductos.get('/', (req, res) => {
    res.json(archivo.getAll())
})

// productosPOST

routerProductos.post('/', (req, res) => {
    archivo.save(req.form)
    res.json(archivo)
})

//productosID

routerProductos.get('/', (req, res) => {
    const id = req.id
    res.json(archivo.getById(id))
})

//ProductosPUT
routerProductos.put('/', (req, res) =>{
    const id = req.id
    res.json(archivo.modify(req.form, id))
})

//productosDELETE

routerProductos.delete('/', (req, res) => {
    const id = req.id
    archivo.deleteById(id)
    res.json(archivo)
})


//carga de routers

app.use('/api/productos', routerProductos)
app.use(`/api/productos/:${id}`, routerProductos)


//server 

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando puerto ${server.address().port}`)
})
server.on('error', error => console.log(`error en server ${error}`))