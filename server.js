//console.log('Hello World');

var http = require('http'); //import de la bibliothèque http

//création du serveur avec en paramètre une fonction qui est exécutée quand un visiteur
// se connecte sur le site : il envoie alors une request au serveur
var server = http.createServer();

server.on('request',function(req, res) {
	
      console.log('il y a eu une requête');
	  res.writeHead(200);
	  res.end('Hello !! comment ça va ?');
});

try {
  server.listen(8081); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}
