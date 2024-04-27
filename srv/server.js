const cds = require('@sap/cds')
const jwt_decode = require('jwt-decode')

// react on bootstrapping events...
cds.on("bootstrap", (app) => {
    // const myLogger = function(req, res, next) {
    //     // console.log("----------------manual log all request-------------")
    //     // console.log(req);
    //     // console.log("----------------manual log all request-------------")
    //     // console.log("----------------manual log simple authorization header-------------")
    //     // console.log(req.headers.authorization);
    //     // console.log("----------------manual log simple authorization header-------------")
    //     console.log("----------------manual log decoded authorization header from here-------------")
    //     console.log(jwt_decode(req.headers.authorization));
    //     console.log("----------------manual log decoded authorization header to here-------------")


    //     // console.log("----------------manual log response from here-------------")
    //     // console.log(res)
    //     // console.log("----------------manual log response to here-------------")

    //     next();
    // }
    
    // app.use(myLogger)
})
// handle and override options
module.exports = cds.server; //> delegate to default server.js
