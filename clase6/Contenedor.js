const fs = require('fs');

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo
    }

    save(data){
        const direc = this.archivo
        const contador = 0
        fs.readFile(`${this.archivo}`, 'utf-8', function(err, contenido) {
            if (err) {
                console.log('error al leer el archivo', err)
            } else {
                let aux = JSON.parse(contenido)
                let aux2 = {"title": data.title,
                            "price":data.price,
                            "thumbnail": data.thumbnail,
                            "id": aux.length+1}
                aux.push(aux2)
                fs.writeFile(`${direc}`, JSON.stringify(aux), err => {
                    if (err) {
                        console.log('error al escribir archivo')
                    } else {
                        console.log('archivo guardado!')
                    }
                })
                console.log(aux)
            }
        })
    }

    getById(numero){
        const item = fs.readFile(`${this.archivo}`, 'utf-8', function(err, contenido){
            if (err) {
                console.log('error al leer el archivo', err)
            } else {
                let aux = JSON.parse(contenido)
                const objeto = aux.find(obj => obj.id === numero)
                console.log(objeto == undefined)
                if (objeto === undefined) {
                    console.log('entro')
                    return null
                } else {
                    console.log('no')
                    return objeto
                }
            }
        })
        return item
    }

    getAll(){
        fs.readFile(`${this.archivo}`, "utf-8", (err, contenido) => {
            if (err) {
                console.log('error al leer el archivo', err)
            } else {
                console.log(JSON.parse(contenido))
                return JSON.parse(contenido)
            }
        })
    }

    deleteById(numero){
        fs.readFile(`${this.archivo}`, 'utf-8', (err, contenido) => {
            if (err) {
                console.log('error al leer el archivo', err)
            } else {
                let aux = JSON.parse(contenido)
                aux = aux.filter(item => item.id != numero)
                console.log(aux)
                return aux
            }
        })
    }

    deleteAll(){
        fs.writeFile(`${this.archivo}`, '[]', err => {
            if (err) {
                console.log('error al borrar los elentos del archivo')
            } else {
                console.log('elementos borrados!')
            }
        })
    }
}

module.exports = Contenedor 