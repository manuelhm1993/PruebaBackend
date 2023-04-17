// Módulos                 ---------------------------------------------------------
const express = require('express')
const app = express()
const mysql = require('mysql')
const conexion = require('express-myconnection')

const routes = require('./routes')

// Configuraciones        ---------------------------------------------------------
app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'pruebabackend'
}

// Middlewares            ---------------------------------------------------------
app.use(conexion(mysql, dbOptions, 'single'))
app.use(express.json())

// Rutas                  ---------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API')
})

app.use('/api', routes)

// Ejecución del servidor ---------------------------------------------------------
app.listen(app.get('port'), () => {
    console.log('El servidor está corriendo en el puerto', app.get('port'))
})