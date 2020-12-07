const https = require ('https');
var infos = ''

function RequestUsername(username){
    const options = {
        host: 'api.github.com',
        path: '/users/' + username,
        method: 'GET',
        headers: {'user-agent': 'node.js'}
        };
       
        let request = https.request(options, function(response){
       
        response.on("data", function(chunk){
            infos += chunk.toString('utf8');
            
        });
        
      
         response.on("end", function(){
            console.log("Infos: ", infos);
            });

        });
        request.end();
       
}

module.exports ={
    RequestUsername,
    infos
}