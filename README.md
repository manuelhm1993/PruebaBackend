# PruebaBackend
 Prueba de ingreso
1. Clonar el repositorio
2. Instalar las dependencias con: npm install
3. Importar la base de datos
4. Enviar las peticiones via postman, personalmente para agilizar el tiempo, utilicé REST Client, las rutas son las siguientes:

###
GET http://localhost:9000/api HTTP/1.1

###
POST http://localhost:9000/api HTTP/1.1
Content-Type: application/json

{
    "isbn": "7891011",
    "titulo": "Una breve historia del tiempo",
    "autor": "Stephen Hawking",
    "publicacion": "2023-04-17"
}

###
DELETE http://localhost:9000/api/2 HTTP/1.1

####
PUT http://localhost:9000/api/1 HTTP/1.1
Content-Type: application/json

{
    "isbn": "7891011",
    "titulo": "Una breve historia del tiempo",
    "autor": "Stephen Hawking",
    "publicacion": "2023-04-17"
}
