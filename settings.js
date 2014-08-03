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


