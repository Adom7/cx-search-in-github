const knex = require('knex')
const dotenv = require ('dotenv')
const gitApi = require ('./GitApiPart')
const https = require ('https')


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

function RequestSeed(username){
const options = gitApi.RequestUsername(username)
    let infos = ''

    let request = https.request(options, function(response){
        response.on("data", function(chunk){
            infos += chunk.toString('utf8');
        });
        
        response.on("end", function(){
          //Créer une table et injecter le json ici
          //TODO Knex, création d'une et de champs si non existant
          const attribute =[]
          infos.forEach(element => {
              Object.keys(element).forEach(()=>{
                  const index = attribute.findIndex(attr => attr === key)

                  if (index === -1) {
                      attribute.push(key)
                  }
              })
          });
          pg.schema.dropTableIfExists(database).then(()=>{
              pg.schema.createTable(database, (table)=>{
                  table.increments()
                  attribute.forEach(fieldName =>{
                    table.string(fieldName , 500).nullable()
                  })
              })
          });
          console.log("Infos: ", infos);
        });
        
    });

    request.end();


}

module.exports = {
    pg,
    RequestSeed,
}