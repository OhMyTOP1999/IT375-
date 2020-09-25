// logger = (req,res,next) => {
//     //console.log(`[Logger]: Requesting to ${req.method} ${req.url}`);
//     console.log(`[Logger]: Requesting`);
//     next();
// }
// module.exports = logger;

logger = (req,res,next)=>{
    console.log(`[Logger]: Requesting to ${req.method} ${req.url}`);
    next();
}

module.exports = logger;