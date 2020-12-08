const knex = require('knex')
const dotenv = require ('dotenv')
const gitApi = require ('./GitApiPart')
const https = require ('https')
const fs = require ('fs')
const path = require ('path')
const infosPath = path.join(process.cwd(),'data','infos.json')



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
    //NOTE Création d'un fichier 'infos.txt' pour parse le fichier.
        fs.writeFileSync('./data/infos.json', infos,(err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });        
        const data = fs.readFileSync(infosPath, "utf-8")
        const infosUser = JSON.parse(data)


        

        
          pg.schema.dropTableIfExists(name).then(()=>{
              pg.schema.createTable(name, (table)=>{
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