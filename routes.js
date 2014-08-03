var fs=require("fs");

module.exports = function (app) {
    //INDEX
    
    app.get('/', function(req, res) {
	res.sendFile(__dirname+"public/BookTest.html");
	});

    //CROSSDOMAIN
    app.get('/crossdomain.xml', function(req, res) {
	var xml = '<?xml version="1.0" ?>\n';
	xml += '<cross-domain-policy>\n';
	xml += '<site-control permitted-cross-domain-policies="master-only"/>\n';
	xml += '<allow-access-from domain="*"/>\n';
	xml += '<allow-http-request-headers-from domain="*" headers="Authorization"/>\n';
	xml += '</cross-domain-policy>\n';
	
	req.setEncoding('utf8');
	res.writeHead( 200, {'Content-Type': 'text/xml'} );
	res.end(xml);
	});
    
    //DEFINE PUBLIC ROUTES & CONTROLLERS
    app.get('/hello',function(req,res){
	var str=req.body.input;
	if(str==undefined){
	    res.send(404);
	}else{
	    res.send("Hello "+str+"!!");
	}	
   });
}
