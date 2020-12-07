const express= require ('express')
const dotenv = require('dotenv')
const database = require('./psqlPart');
const gitApi = require('./GitApiPart');
const GitApiPart = require('./GitApiPart');

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
    username = req.params.username
   gitApi.RequestUsername(username)
   res.send(gitApi.RequestUsername.infos)
//    res.send(database.body)
// console.log(req.params.username)
})

app.listen(ServerPort, ()=>{
    console.log(`Server is listening on port ${ServerPort} `)
})