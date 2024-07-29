const boom = require('@hapi/boom')

function validatorHandler(scehama, property){
    return(req,res,next)=>{
        const data = req[property]
        const{ error }= schema.validae(data,{ abortEarly:false })
        if(error){
            next(boom.badRequest(error))
        }
        next()
    }
}
module.exports = validatorHandler