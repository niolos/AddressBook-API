class JSONResponse {
    static success(res, message = "success", data, status) {
       res.status(status ?? res.statusCode).json({
          status: status ?? res.statusCode,
          message,
          data,
          error: {},
       });
    }
    
    static error(res, message = "error", error, status) {
      if(error.message){
         error = error.message;
      }
       res.status(status ?? res.statusCode).json({
          message,
          error,
          data: {},
          status: status ?? res.statusCode,
       });
    }
 }
 
 module.exports = { JSONResponse }; 