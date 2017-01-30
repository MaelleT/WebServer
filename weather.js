// Application  : manipulation du résultat d'une requête
// site de données météo : openweathermap.org

// récupération des informations sur la météo Nantaise
var http = require('http');

var request = http.get("http://api.openweathermap.org/data/2.5/weather?q=Nantes&appid=1a02c3d069d60c5db4f277a894120c6d",
					   //appid correspond à une clé suite à une authentification sur le site 
					   function (res){
									 
							console.log(res.statusCode);
	
							res.on('data',function(chunk){
									console.log("Body :" + chunk);
									}
								  );
	
						}
					  );
