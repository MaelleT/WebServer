//console.log('Hello World');

var http = require('http'); //import de la bibliothèque http

var fs = require('fs'); //import de la bibliothèque E/S sur fichiers

var url = require('url');//import de la biliothèque pour la manipulation des urls


//création du serveur avec en paramètre une fonction qui est exécutée quand un visiteur
// se connecte sur le site : il envoie alors une request au serveur
var server = http.createServer();

server.on('request',function(req, res) {
	
	  //récupération d'informations sur la requête :
	  var userAgent= req.headers['user-agent'];
      //console.log('il y a eu une requête. Le client web utilisé est '+ userAgent );

	  
	  fs.readFile('index.html','utf-8',function(err,data){
	 	if (err) {
			res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
			res.write("Ce fichier n'existe pas");
		}
		else
		{
			var query = url.parse(req.url,true).query
			var name = query.name;
	  		res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
			
			data = data.replace('{{name}}',query.name); // la fonction replace permet de remplacer une chaine de caractères par une autre.
			res.write(data);
		}
		res.end();
	  	
	  });
  
});

try {
  server.listen(8081); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}
