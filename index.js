const express = require('express')
require('dotenv').config()
const express = require('express')


const app = express();

app.use( express.static('public'))

app.use('/api/auth', require('./routes/auth'))


app.listen( process.env.PORT, () =>{
    console.log('Servidor corriendo en puerto', process.env.PORT)
} )