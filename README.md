# TARDIS API

Api para almacenar y consultar TARDIS.

- [TARDIS API](#tardis-api)
  - [TARDIS](#tardis)
    - [Obtener todas las TARDIS](#obtener-todas-las-tardis)
    - [Obtener una TARDIS por id](#obtener-una-tardis-por-id)
    - [Agregar nueva TARDIS](#agregar-nueva-tardis)
    - [Modificar una TARDIS por id](#modificar-una-tardis-por-id)
    - [Borrar una TARDIS por id](#borrar-una-tardis-por-id)
  - [Dimensiones](#dimensiones)
    - [Obtener todas las dimensiones](#obtener-todas-las-dimensiones)
    - [Obtener una dimensión por id](#obtener-una-dimensión-por-id)
    - [Agregar nueva dimensión](#agregar-nueva-dimensión)
    - [Modificar una dimensión por id](#modificar-una-dimensión-por-id)
    - [Borrar una dimensión por id](#borrar-una-dimensión-por-id)
  - [Planetas](#planetas)
    - [Obtener todos los Planetas](#obtener-todos-los-planetas)
    - [Obtener un Planeta por id](#obtener-un-planeta-por-id)
    - [Agregar nuevo Planeta](#agregar-nuevo-planeta)
    - [Modificar un Planeta por id](#modificar-un-planeta-por-id)
    - [Borrar un Planeta por id](#borrar-un-planeta-por-id)
  - [Personas](#personas)
    - [Obtener todas las Personas](#obtener-todas-las-personas)
    - [Obtener una Persona por id](#obtener-una-persona-por-id)
    - [Agregar nueva Persona](#agregar-nueva-persona)
    - [Modificar una Persona por id](#modificar-una-persona-por-id)
    - [Borrar una Persona por id](#borrar-una-persona-por-id)



## TARDIS

Las TARDIS tienen los siguientes parámetros.

|  Parámetro  |   Tipo   | Valor                               |
| :---------: | :------: | :---------------------------------- |
| dimensiones | String[] | Array de los ids de las dimensiones |
|  camuflaje  |  Number  | Valor del camuflaje actual          |
|  timeLord   |  Number  | Número del Time Lord de la TARDIS   |
|     año     |  Number  | Año en el que se encuentra          |

### Obtener todas las TARDIS

```http
GET /api/tardis
```

### Obtener una TARDIS por id

```http
GET /api/tardis/id
```

### Agregar nueva TARDIS

```http
POST /api/tardis
```

Se deben agregar todos los parámetros.

### Modificar una TARDIS por id

```http
PUT /api/tardis/id
```

Se deben incluir todos los datos.

### Borrar una TARDIS por id

```http
DELETE /api/tardis/id
```

## Dimensiones

Las dimensiones tienen los siguientes parámetros.

| Parámetro |   Tipo   | Valor                                     |
| :-------: | :------: | :---------------------------------------- |
|  nombre   |  String  | Nombre de la dimensión                    |
| planetas  | String[] | Array de ids de los planetas que contiene |

### Obtener todas las dimensiones

```http
GET /api/dimensiones
```

### Obtener una dimensión por id

```http
GET /api/dimensiones/id
```

### Agregar nueva dimensión

```http
POST /api/dimensiones
```

Se deben agregar todos los parámetros.

### Modificar una dimensión por id

```http
PUT /api/dimensiones/id
```

Se deben incluir todos los datos.

### Borrar una dimensión por id

```http
DELETE /api/dimensiones/id
```
## Planetas

Los planetas contienen los siguientes datos.

| Parametro |   Tipo   | Valor                                    |
| :-------: | :------: | :--------------------------------------- |
|  nombre   |  String  | Nombre del planeta                       |
| personas  | String[] | Array de ids de las personas del planeta |

### Obtener todos los Planetas

```http
GET /api/planetas
```

### Obtener un Planeta por id

```http
GET /api/planetas/id
```

### Agregar nuevo Planeta

```http
POST /api/planetas
```

Se deben agregar todos los parámetros.

### Modificar un Planeta por id

```http
PUT /api/planetas/id
```

Se deben incluir todos los datos.

### Borrar un Planeta por id

```http
DELETE /api/planetas/id
```

## Personas

Las personas tienen los siguientes datos.

| Parametro |  Tipo  | Valor                    |
| :-------: | :----: | :----------------------- |
|  nombre   | String | Nombre de la persona     |
|   edad    | Number | Numero de años que tiene |

### Obtener todas las Personas

```http
GET /api/personas
```

### Obtener una Persona por id

```http
GET /api/personas/id
```

### Agregar nueva Persona

```http
POST /api/personas
```

Se deben agregar todos los parámetros.

### Modificar una Persona por id

```http
PUT /api/personas/id
```

Se deben incluir todos los datos.

### Borrar una Persona por id

```http
DELETE /api/personas/id
```
