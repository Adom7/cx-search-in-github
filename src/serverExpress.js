const express= require ('express')
const dotenv = require('dotenv')
const database = require('./seed');

// import RequestUsername from './seed'


// database()
dotenv.config()
console.log(database);

const ServerPort = process.env.SERVER_PORT ||   4242
const app = express()

app.get('/', (req,res) =>{
    res.json({
        hello:'From Pokedex API'
    })
})

app.get('/user/:username' , (req,res) => {
    // let test = req.params.username
    res.send(database.RequestUsername(req.params.username))
//    database.RequestUsername(req.params.username)
// console.log(req.params.username)
})

app.listen(ServerPort, ()=>{
    console.log(`Server is listening on port ${ServerPort} `)
})