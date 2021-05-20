const express = require('express');
const app = express();
const cors = require('cors') ;
const util = require('util');
const postRouter = require('./routes/post') 
const categoriaRouter = require('./routes/categoria') 

require('./db');

app.use(express.json()) ;




app.use('/post', postRouter)
app.use('/categoria', categoriaRouter)

app.listen(3000 , () =>{
    console.log('Servidor inicializado!');
})