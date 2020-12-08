const https = require ('https');

let infos = "vide"

function RequestUsername(username){
    const options = {
        host: 'api.github.com',
        path: '/users/' + username,
        method: 'GET',
        headers: {'user-agent': 'node.js'}
    };
    return options
}

module.exports ={
    RequestUsername
}