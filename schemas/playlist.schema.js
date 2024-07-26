const Joi= require('joi')

const id = Joi.number().integer();
const title = Joi.string().min(1);


const getPlaylistSchema = Joi.object({
    id:id.required(),
    title:title
})


const createPlaylistSchema = Joi.object({
    title: title.required(),
  
});

const updatePlaylistSchema = Joi.object({
    title:title,
   
})


module.exports = { createPlaylistSchema,getPlaylistSchema,updatePlaylistSchema}