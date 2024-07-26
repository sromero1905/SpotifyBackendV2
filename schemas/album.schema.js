const Joi= require('joi')

const id = Joi.number().integer();
const title = Joi.string().min(1);
const releaseDate = Joi.date();

const getAlbumSchema = Joi.object({
    id:id.required()
})


const createAlbumSchema = Joi.object({
    title: title.required(),
    releaseDate: releaseDate.required()
});

const updateAlbumSchema = Joi.object({
    title:title,
    releaseDate:releaseDate
})


module.exports = { createAlbumSchema,getAlbumSchema,updateAlbumSchema };