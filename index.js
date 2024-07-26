const cors = require('cors')
const express = require('express')
const {config}= require('./config/config')
const app = express()













const port = config.port
app.listen(port,()=>{
    console.log(`servidor cuorriendo en el puerto: ${port}`);
})