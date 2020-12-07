const knex = require('knex')
const dotenv = require ('dotenv')


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

module.exports = {
    ServerKnex,
}