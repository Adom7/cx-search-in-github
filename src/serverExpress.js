const express= require ('express')
const dotenv = require('dotenv')
const database = require('./seed')

database()
dotenv.config()

const ServerPort = process.env.SERVER_PORT ||   4242
const app = express()

app.get('/', (req,res) =>{
    res.json({
        hello:'From Pokedex API'
    })
})

app.listen(ServerPort, ()=>{
    console.log(`Server is listening on port ${ServerPort} `)
})