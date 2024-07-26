const Joi= require('joi');


const id = Joi.number().integer();
const name = Joi.string().min(1);
const LastName= joi.string().min(1)
const NickName= joi.string().min(1)
const info= joi.string()
const birthDate= joi.date()


const getArtistSchema = Joi.object({
    id:id.required(),
})


const createArtistSchema = Joi.object({
    name:name,
    LastName:LastName,
    NickName:NickName,
    info:info.required(),
   birthDate:birthDate.required()
   
  
});

const updateArtistSchema = Joi.object({
    name:name,
    LastName:LastName,
    NickName:NickName,
    info:info,
   birthDate:birthDate
})


module.exports = { updateArtistSchema,getArtistSchema,createArtistSchema}