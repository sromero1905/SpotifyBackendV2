const Joi= require('joi');


const id = Joi.number().integer();
const name = Joi.string().min(1);
const LastName = Joi.string().min(1);
const company = Joi.string().min(1);
const username = Joi.string().min(1);
const password= joi.string()



const getManagerSchema = Joi.object({
    id:id.required(),
})


const createManagerSchema = Joi.object({
    name:name.required(),
    LastName:LastName.required(),
    company:company.required(),
    username:username.required(),
    password:password.required()
});

const updateManagerSchema = Joi.object({
    name:name,
    LastName:LastName,
    username:username,
    password:password
})


module.exports = { updateManagerSchema,getManagerSchema,createManagerSchema}