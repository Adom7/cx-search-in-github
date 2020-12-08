const express= require ('express')
const dotenv = require('dotenv')
const seed = require('./seed');
const gitApi = require('./GitApiPart');
const https = require ('https');
const tableFile = require('./createTable');

// import RequestUsername from './seed'


// database()
dotenv.config()
// console.log(database);

const ServerPort = process.env.SERVER_PORT ||   4242
const app = express()

app.get('/', (req,res) =>{
    res.json({
        hello:'From Pokedex API'
    })
})

app.get('/user/:username' , (req,res) => {
    const username = req.params.username
    seed.RequestSeed(username)
    tableFile.createTable()
    res.send(tableFile.infosUser)
})

app.listen(ServerPort, ()=>{
    console.log(`Server is listening on port ${ServerPort} `)
}) 
