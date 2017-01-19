//console.log('Hello World');

var http = require('http'); //import de la bibliothèque http

//création du serveur avec en paramètre une fonction qui est exécutée quand un visiteur
// se connecte sur le site : il envoie alors une request au serveur
var server = http.createServer();

server.on('request',function(req, res) {
	
	  //récupération d'informations sur la requête :
	  var userAgent= req.headers['user-agent'];
      console.log('il y a eu une requête. Le client web utilisé est '+ userAgent );
	
	  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
	  res.write('<!DOCTYPE html>'+
      '<html>'+
      '    <head>'+
      '        <meta charset="utf-8" />'+
      '        <title>Ma page Node.js !</title>'+
      '    </head>'+ 
      '    <body>'+
      '     	<h1>Hello <strong>WORLD</strong> !</h1>'+
      '    </body>'+
      '</html>');
      res.end();
	  res.end('Hello world');
});

try {
  server.listen(8081); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}
