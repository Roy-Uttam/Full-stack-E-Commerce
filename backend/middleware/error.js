const ErrorHandler = require("../utlis/errorhandler")

module.exports = (err, req, res, next)=>{

    err.statusCode = err.statusCode || 500;
    err.message =err.message || "Internal server Error";


    //wrong mongodb object

    if(err.name === "CastError"){

        const message = `resource not found. invalid: ${err.path}`
        err = new ErrorHandler(message,400)
    }

    res.status(err.statusCode).json({
        success: false,
        error:err.message
    });
}