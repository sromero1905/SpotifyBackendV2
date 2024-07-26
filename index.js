const express = require('express')

const app = express()
const port = 4000



app.get(('/'),(req,res)=>{
res.send('hola a todos ')
})

app.listen(port,()=>{
    console.log('server runinr in port'+ port);
})