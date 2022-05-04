const express = require('express')
const app = express()

class Api {
    constructor() {
        this.productos = [
                            {"title":"prueba","price":123.45,"thumbnail":"prueba url","id":1},
                            {"title":"prueba2","price":123.45,"thumbnail":"prueba url","id":2},
                            {"title":"prueba3","price":123.45,"thumbnail":"prueba url","id":3},
                            {"title":"prueba4","price":123.45,"thumbnail":"prueba url","id":4},
                            {"title":"prueba5","price":123.45,"thumbnail":"prueba url","id":5},
                            {"title":"prueba6","price":123.45,"thumbnail":"prueba url","id":6},
                            {"title":"prueba7","price":123.45,"thumbnail":"prueba url","id":7},
                            {"title":"prueba8","price":123.45,"thumbnail":"prueba url","id":8},
                            {"title":"prueba9","price":123.45,"thumbnail":"prueba url","id":9},
                            {"title":"prueba10","price":123.45,"thumbnail":"prueba url","id":10}
                        ]
        this.id = 10
    }

    getAll(){
        return this.productos
    }

    getById(id){
        const item = this.productos.find(obj => obj.id === id)
        if (item == undefined){
            return {error: 'producto no encontrado'}
        } else {
            return item
        }
    }

    save(data){
        this.id++
        const item = {"title": data.title,
                    "price":data.price,
                    "thumbnail": data.thumbnail,
                    "id":  this.id}        
        this.productos.push(item)
    }

    deleteById(id){
        if(this.getById(id) != {error: 'producto no encontrado'}){
            this.productos = this.productos.filter(item => item.id != id)
        }else{
            this.getById(id)
        }
    }
    
    modify(data,id){
        if(this.getById(id) != {error: 'producto no encontrado'}){
            this.productos.id[id] = {
                                        "title": data.title,
                                        "price": data.price,
                                        "thumbnail": data.thumbnail
                                    }
        } else {
            this.getById(id)
        }
    }
}

module.exports = Api