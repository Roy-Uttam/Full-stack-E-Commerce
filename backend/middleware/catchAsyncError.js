module.exports = (thisFunc)=>(res,req,next)=>{

    Promise.resolve(thisFunc(res,req,next)).catch(next);
}