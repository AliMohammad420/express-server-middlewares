'use strict';

const logger = (req,res,next)=>{
req.regData = new Date();
    next();
}
module.exports = logger;