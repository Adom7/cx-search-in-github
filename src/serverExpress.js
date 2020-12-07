const express= require ('express')
const dotenv = require('dotenv')
const database = require('./seed')
// import RequestUsername from './seed'


// database()
dotenv.config()

const ServerPort = process.env.SERVER_PORT ||   4242
const app = express()

app.get('/', (req,res) =>{
    res.json({
        hello:'From Pokedex API'
    })
})

app.get('user/:username' , (req,res) => {
  res.send(req.params.username)
})

app.listen(ServerPort, ()=>{
    console.log(`Server is listening on port ${ServerPort} `)
})