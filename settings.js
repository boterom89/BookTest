//Settings.js

module.exports = function (app, constants) {

    //set app variable
    app.set('showStackError', true);

    /*We can set here variables for envinronments such as:
      
     // all environments
     app.set('title', 'My Application');

     // development only
     if ('development' == app.get('env')) {
     app.set('db uri', 'localhost/dev');
     }

     // production only
     if ('production' == app.get('env')) {
     app.set('db uri', 'n.n.n.n/prod');
     }
     */
    
    app.use(express.compress({
        filter: function (req, res) {
          return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
        }
      , level: 9
    }));

    app.use(express.static(__dirname + '/public'));
    //app.use(express.logger('dev'));

    // set views path, template engine and default layout
    //app.set('views', '/home/mapache/http_server/view');
    app.set('view engine', 'html');

    app.configure(function () {
        app.use(express.cookieParser());

        // bodyParser should be above methodOverride
        app.use(express.bodyParser());
        app.use(express.methodOverride());

        app.use(express.favicon());
        app.use(app.router);

        // assume "not found" in the error msgs
        // is a 404. this is somewhat silly, but
        // valid, you can do whatever you like, set
        // properties, use instanceof etc.
        app.use(function(err, req, res, next){
            if (~err.message.indexOf('not found')) return next();
            res.status(500).json({ 'status':'error', 'name':'500', 'error':err.stack, 'url':req.originalUrl });
        });

        // assume 404 since no middleware responded
        app.use(function(req, res, next){
            res.status(404).json({ 'status':'error', 'name':'404', 'error':'page doesnt exist', 'url':req.originalUrl })
        });
    })


