const knex = require('knex')
const dotenv = require ('dotenv')



// fetch('https://api.github.com/users/Adom7')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })


dotenv.config()
module.exports = function(){
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