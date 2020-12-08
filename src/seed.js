const knex = require('knex')
const dotenv = require ('dotenv')
const gitApi = require ('./GitApiPart')
const https = require ('https')
const fs = require ('fs')
const path = require ('path')
const infosPath = path.join(process.cwd(),'data','infos.json')




function RequestSeed(username){
const options = gitApi.RequestUsername(username)
    let infos = ''

    let request = https.request(options, function(response){
        response.on("data", function(chunk){
            infos += chunk.toString('utf8');
            fs.writeFile('./data/infos.json', infos,(err) => {
              if (err) throw err;
              console.log('The file has been saved!');
          });       
        });
        
        response.on("end", function(){
    //NOTE Création d'un fichier 'infos.txt' pour parse le fichier.
        
        
        
        
        
        });
        
    });

    request.end();


}


module.exports = {
    RequestSeed,
}