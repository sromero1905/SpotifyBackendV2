const cors = require('cors')
const express = require('express')
const {config}= require('./config/config')
const {logErrors, errorHandler,boomErrorHandler  }= require('./middlewares/error.handler')


const app = express()






//midlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);





//routes
const port = config.port
app.listen(port,()=>{
    console.log(`servidor cuorriendo en el puerto: ${port}`);
})