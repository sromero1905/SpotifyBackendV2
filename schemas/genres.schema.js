const Joi= require('joi')

const id = Joi.number().integer();
const title = Joi.string().min(1);
const description = Joi.string()
const releaseDate = Joi.date();

const getGenreSchema = Joi.object({
    id:id.required()
})


const createGenreSchema = Joi.object({
    title: title.required(),
    description: description.required(),
});

const updateGenreSchema = Joi.object({
    title:title,
    description: description
})


module.exports = { createGenreSchema,getGenreSchema,updateGenreSchema };