const getHtmlRouter = require('./routes/getHtml');
const middlewares = require('../middlewares/test');

module.exports =  function(app) {   
    // middlewares
    app.use(middlewares);
    // routes
    app.use('/', getHtmlRouter);

}