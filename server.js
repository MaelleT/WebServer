//console.log('Hello World');

var http = require('http'); //import de la bibliothèque http

var fs = require('fs');
//création du serveur avec en paramètre une fonction qui est exécutée quand un visiteur
// se connecte sur le site : il envoie alors une request au serveur
var server = http.createServer();

server.on('request',function(req, res) {
	
	  //récupération d'informations sur la requête :
	  var userAgent= req.headers['user-agent'];
      console.log('il y a eu une requête. Le client web utilisé est '+ userAgent );

	  
	  fs.readFile('index.html','utf-8',function(err,data){
	 	if (err) throw err;
	  	res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
		res.write(data);
		res.end();
	  
	  });
  
});

try {
  server.listen(8081); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}
