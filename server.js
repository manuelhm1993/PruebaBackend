// Módulos                 ---------------------------------------------------------
const express = require('express')
const app = express()
const mysql = require('mysql')
const conexion = require('express-myconnection')

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
app.arguments(conexion(mysql, dbOptions, 'single'))

// Rutas                  ---------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API')
})

// Ejecución del servidor ---------------------------------------------------------
app.listen(app.get('port'), () => {
    console.log('El servidor está corriendo en el puerto', app.get('port'))
})