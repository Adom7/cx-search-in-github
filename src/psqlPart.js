const knex = require('knex')
const dotenv = require ('dotenv')

dotenv.config()
const {DATABASE_HOST : host , DATABASE_NAME : name, DATABASE_USER : user , DATABASE_PORT : port, DATABASE_PASS : pass} = process.env
const pg = knex({
    client: 'pg',
    connection: {
      host : host,
      user : user,
      port : port,
      password : pass,
      database : name,
    },
    searchPath: ['knex', 'public'],
});

/*
const options = gitApi.RequestUsername(username)
    let infos = ''

    let request = https.request(options, function(response){
        response.on("data", function(chunk){
            infos += chunk.toString('utf8');
        });
        
        response.on("end", function(){
          //Créer une table et injecter le json ici
            console.log("Infos: ", infos);
        });
    });

    request.end();
*/
module.exports = pg