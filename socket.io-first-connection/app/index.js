const middlewares = require('../middlewares/index');
const getHtmlRouter = require('./routes/getHtml');
// A module is just a bit of code encapsulated in a file, and exported to another file. M
module.exports =  function(app, express) {   
/* this line tells Express to use the public folder as our static folder from which we can serve static files
they only communicate via the module.exports object. Any code that you want to be accessible in another file can be a module!*/
app.use(express.static('public'));
    
    // middlewares
    app.use(middlewares);
    // routes
    app.use('/', getHtmlRouter);

}