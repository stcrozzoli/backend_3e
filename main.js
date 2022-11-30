const express = require('express')
const app = express()
let productos = []
let productoRandom = ''
const fs = require('fs')

async function getAll () {
    try{
        const listadoProds = [await fs.promises.readFile('products.txt', 'utf-8')]
        productos = JSON.parse(listadoProds)
        console.log(productos)

    }
    catch(error){
        console.log(error)
    }
}

async function getRandom () {
    try{
        const listadoProds = [await fs.promises.readFile('products.txt', 'utf-8')]
        productos = JSON.parse(listadoProds)
        const randomNumber = Math.random() * (productos.length - 0) + 0;
        const randomNumber2 = Math.floor(randomNumber)
        productoRandom = productos[randomNumber2]
        console.log(productos[randomNumber2])


    }
    catch(error){
        console.log(error)
    }
}

getAll()
getRandom()

app.get('/productos', (req, res) => {
    res.send(`${productos}`)
})

app.get('/productoRandom', (req, res) => {
    res.send(`${productoRandom}`)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP esta escuchando el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error sobre el servidor ${error}`))