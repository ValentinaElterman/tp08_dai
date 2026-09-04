DB_HOST = localhost
DB_DATABASE = dai-events
DB_USER = postgres
DB_PASSWORD = root
DB_PORT = 5432

# LOGHELPER 
LOG_FILE_PATH = "D:/temp/logs/" 
LOG_FILE_NAME = "archivo.log" 
LOG_TO_FILE_ENABLED = "true" 
LOG_TO_CONSOLE_ENABLED  = "true"

1. Selección y análisis de la API
Antes de comenzar con Swagger, deberán identificar y analizar la API que van a documentar.

Deberán presentar:

Nombre del proyecto seleccionado: TP 08 - PG Provincias
Breve descripción de la funcionalidad del proyecto: Servidor web desarrollado en Node.js y Express para la gestión (CRUD) de provincias y persistencia en PostgreSQL
Indicar si se trata de una API propia o externa: API propia
URL base de la API: http://localhost:3000/api/province
Listado de los endpoints utilizados por el proyecto.
Método HTTP utilizado en cada endpoint (GET, POST, PUT, PATCH, DELETE, etc.).
Breve descripción de la función de cada endpoint.
Por ejemplo:


Método          |      Endpoint         |        Descripción

--------------------------------------------------------------------------------------

GET             |    /api/province      |   Obtiene el listado completo de provincias
--------------------------------------------------------------------------------------
GET             |   /api/province/{id}  |   Obtiene una provincia específica por su ID
--------------------------------------------------------------------------------------
POST            |    /api/province      |   Crea/inserta una nueva provincia
--------------------------------------------------------------------------------------
PUT             |    /api/province      |   Actualiza la información de una provincia existente
--------------------------------------------------------------------------------------
DELETE          |   /api/province/{id}  |   Elimina una provincia según su ID