const knex = require('knex')
const dotenv = require ('dotenv')
const https = require ('https');
const username = null || 'Amadou00'

function RequestUsername(username){
    const options = {
        host: 'api.github.com',
        path: '/users/' + username,
        method: 'GET',
        headers: {'user-agent': 'node.js'}
        };
        
        let request = https.request(options, function(response){
        let body = '';
        response.on("data", function(chunk){
            body += chunk.toString('utf8');
        });
        
        response.on("end", function(){
            console.log("Body: ", body);
            });
        });
        
        request.end();
}



dotenv.config()
function ServerKnex(){
    const {DATABASE_HOST : host , DATABASE_NAME : name, DATABASE_USER : user , DATABASE_PORT : port, DATABASE_PASS : pass} = process.env
    return pg = knex({
        client: 'pg',
        connection: {
          host : host,
          user : name,
          port : port,
          password : pass,
          database : name,
        },
        searchPath: ['knex', 'public'],
      });
}

module.exports = {Request,ServerKnex}