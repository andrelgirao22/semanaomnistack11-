const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)
/**
 * Tipos de parâmetros
 * 
 * Query Params: 
 * /users?name=xxx
 * 
 * Router  Params
 *  Utilizado para identificar um unico recurso
 * 
 * Request Body
 * 
 */



app.listen(3333)

