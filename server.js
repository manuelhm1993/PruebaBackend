const express = require('express')

const app = express()

app.set('port', process.env.PORT || 9000)

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API')
})

app.listen(app.get('port'), () => {
    console.log('El servidor está corriendo en el puerto', app.get('port'))
})