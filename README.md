# TARDIS API

Api para almacenar y consultar TARDIS.

## TARDIS

Las TARDIS tienen los siguientes parametros.

|  Parametro  |   Tipo   | Valor                               |
| :---------: | :------: | :---------------------------------- |
| dimensiones | String[] | Array de los ids de las dimensiones |
|  camuflaje  |  Number  | Valor del camuflaje actual          |
|  timeLord   |  Number  | Numero del Time Lord de la TARDIS   |
|    anio     |  Number  | Año en el que se encuentra          |

### Obtener todas las TARDIS

`GET /api/tardis`

### Obtener una TARDIS por id

`GET /api/tardis/id`

### Agregar nueva TARDIS

`POST /api/tardis`

Se deben agregar todos los parametros.

### Modificar una TARDIS por id

`PUT /api/tardis/id`

Se deben incluir todos los datos.

### Borrar una TARDIS por id

`DELETE /api/tardis/id`

## Dimension

Las dimensiones tienen los siguientes parametros.

| Parametro |   Tipo   | Valor                                     |
| :-------: | :------: | :---------------------------------------- |
|  nombre   |  String  | Nombre de la dimension                    |
| planetas  | String[] | Array de ids de los planetas que contiene |

### Obtener todas las dimensiones

`GET /api/dimensiones`
