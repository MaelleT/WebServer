//console.log('Hello World');

var http = require('http'); //import de la bibliothèque http

//création du serveur avec en paramètre une fonction qui est exécutée quand un visiteur
// se connecte sur le site : il envoie alors une request au serveur
var server = http.createServer();

server.on('request',function(req, res) {
	
      console.log('il y a eu une requête');
});

try {
  server.listen(8081); //démarrage du serveur sur le port 8080
} catch (err) {
	console.error('there was an error starting web server !', err);
}
