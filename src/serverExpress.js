const express= require ('express')
const dotenv = require('dotenv')
const database = require('./psqlPart');
const gitApi = require('./GitApiPart');
const https = require ('https');

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
    //res.send('OK')
    const options = gitApi.RequestUsername(username)
    //Test affichage du json
    let infos = ''

    let request = https.request(options, function(response){
        response.on("data", function(chunk){
            infos += chunk.toString('utf8');
        });
        
        response.on("end", function(){
            console.log("Infos: ", infos);
            res.send(infos)
        });
    });

    request.end();
    //res.send(database.body)
// console.log(req.params.username)
})

app.listen(ServerPort, ()=>{
    console.log(`Server is listening on port ${ServerPort} `)
})