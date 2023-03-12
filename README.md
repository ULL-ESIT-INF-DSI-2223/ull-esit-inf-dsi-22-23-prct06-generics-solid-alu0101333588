###### Desarrollo de Sistemas Informáticos | Práctica 06 | Andrés Hernández Ortega
# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101333588/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101333588?branch=master)

## Introducción

Continuando con los conceptos del lenguaje de programación, TypeScript, procederemos a realizar una nueva práctica, en esta ocasión la número seis en la que seguiremos con los conceptos de las clases, profundizando en las interfaces genéricas y los principios SOLID para tener un código mucho más limpio y de calidad.

Además, en esta ocasión introduciremos las herramientas Instanbul y Coveralls.

## Ejercicios

### 1. Dsiflix

Se requiere la creación de un modelo de datos de una plataforma de vídeo en streaming, concretamente en su catálogo de contenidos, que pueden ser películas, series y documentales.

La solución propuesta es la siguiente:

Se desarrollan cuatro interfaces y cuatro clases:

**Interfaz Streamable<T>**

- La interfaz de tipo genérica `Streamable<T>`  posee cuatro funcionalidades:
    - `busquedaporAno` que recibe un `number` y servirá para realizar busquedas de contenido por año. Devuelve un array de tipo genérico T.
    - `busquedaporNombre` que recibe un `string` y servirá para realizar busquedas de contenido por nombre. Devuelve un tipo genérico T o boolean.
    - `busquedaporPlataforma` que recibe un `string` y servirá para realizar busquedas de contenido por plataforma de contenidos. Devuelve un array de tipo genérico T.
    - `busquedaporTematica` que recibe un `string` y servirá para realizar busquedas de contenido por temática de contenidos. Devuelve un array de tipo genérico T. 


**Interfaz Serie**

- La interfaz `Serie`  posee ocho atributos:
    - `titulo_` de tipo `string` es el título del contenido.
    - `fecha_` de tipo `fecha` (que es un `type` creado que contiene tres elementos: `number`, `string` y `number`) para denotar la fecha de emisión del contenido.
    - `sinopsis_` de tipo `string` alberga la sinopsis del contenido.
    - `tematica_` de tipo `string` alberga la categoría del contenido.
    - `plataforma` de tipo `string` indica la plataforma de contenidos a la que pertenece.
    - `temporadas_` de tipo `number` y que indica cuántas temporadas tiene la serie.
    - `capitulos_` de tipo `number`, indica el número de capítulos totales que tiene la serie.
    - `personajes` de tipo `string[]`, alberga los personajes de la serie.

**Interfaz Pelicula**

- La interfaz `Pelicula`  posee ocho atributos:
    - `titulo_` de tipo `string` es el título del contenido.
    - `fecha_` de tipo `fecha` (que es un `type` creado que contiene tres elementos: `number`, `string` y `number`) para denotar la fecha de emisión del contenido.
    - `sinopsis_` de tipo `string` alberga la sinopsis del contenido.
    - `tematica_` de tipo `string` alberga la categoría del contenido.
    - `plataforma` de tipo `string` indica la plataforma de contenidos a la que pertenece.
    - `duracion_` de tipo `number` y que indica cuanto dura la película.
    - `reparto_` de tipo `string[]`, alberga los actores y actrices de la película.  

**Interfaz Documental**

- La interfaz `Documental`  posee ocho atributos:
    - `titulo_` de tipo `string` es el título del contenido.
    - `fecha_` de tipo `fecha` (que es un `type` creado que contiene tres elementos: `number`, `string` y `number`) para denotar la fecha de emisión del contenido.
    - `sinopsis_` de tipo `string` alberga la sinopsis del contenido.
    - `tematica_` de tipo `string` alberga la categoría del contenido.
    - `plataforma` de tipo `string` indica la plataforma de contenidos a la que pertenece.
    - `duracion_` de tipo `number` y que indica cuanto dura el documental.


**Clase abstracta BasicStreamableCollection<T>**

- La clase abstracta `BasicStreamableCollection<T>`  de tipo genérica, implementa la interfaz `Streamable<T>`

- Posee un único atributo privado denominado `coleccion_` que es un array de tipo genérico `T`. Alberga la colección de contenido que será heredada por las clases hijas.

- Tiene un constructor que recibe un array de tipo genérico `T` y lo establece como valor al atributo privado.

- Posee cuatro funciones abstractas que son las que están enunciadas en la interfaz `Streamable<T>`:
    - `busquedaporNombre`
    - `busquedaporAno`
    - `busquedaporPlataforma`
    - `busquedaporTematica`

- Desarrolla una función `anadir_contenido` que recibe un valor de tipo genérico `T` y lo añade al atributo privado de la clase.

**Clase ColeccionDocumentales**

- La clase `ColeccionDocumentales` es una extensión de la clase abstracta `BasicStreamableCollection` que es de tipo `Documental`.

- Posee un constructor que recibe un array de tipo `Documental` y lo establece como atributo privado `coleccion_`.

- Desarrolla la función `busquedaporNombre` que recibe un `string` y realiza un recorrido buscando si el nombre del contenido existe o no. Si existe retorna el contenido de tipo `Documental`, en caso contrario retorna un `false`.

- Desarrolla la función `busquedaporAno` que recibe un `number` y realiza un recorrido buscando si el año del contenido existe o no. Si existe retorna todos los contenidos que se han emitido en dicho año a través de un array de tipo `Documental`, en caso contrario el array se imprimirá vacío.

- Desarrolla la función `busquedaporPlataforma` que recibe un `string` y realiza un recorrido buscando si hay contenidos relacionados con dicha plataforma. Si existe retorna todos los contenidos que se han emitido en dicha plataforma a través de un array de tipo `Documental`, en caso contrario el array se imprimirá vacío.

- Desarrolla la función `busquedaporTematica` que recibe un `string` y realiza un recorrido buscando si el tema del contenido existe o no. Si existe retorna todos los contenidos que se han emitido con dicha temática a través de un array de tipo `Documental`, en caso contrario el array se imprimirá vacío.

**Clase ColeccionPeliculas**

- La clase `ColeccionPeliculas` es una extensión de la clase abstracta `BasicStreamableCollection` que es de tipo `Pelicula`.

- Posee un constructor que recibe un array de tipo `Pelicula` y lo establece como atributo privado `coleccion_`.

- Desarrolla la función `busquedaporNombre` que recibe un `string` y realiza un recorrido buscando si el nombre del contenido existe o no. Si existe retorna el contenido de tipo `Pelicula`, en caso contrario retorna un `false`.

- Desarrolla la función `busquedaporAno` que recibe un `number` y realiza un recorrido buscando si el año del contenido existe o no. Si existe retorna todos los contenidos que se han emitido en dicho año a través de un array de tipo `Pelicula`, en caso contrario el array se imprimirá vacío.

- Desarrolla la función `busquedaporPlataforma` que recibe un `string` y realiza un recorrido buscando si hay contenidos relacionados con dicha plataforma. Si existe retorna todos los contenidos que se han emitido en dicha plataforma a través de un array de tipo `Pelicula`, en caso contrario el array se imprimirá vacío.

- Desarrolla la función `busquedaporTematica` que recibe un `string` y realiza un recorrido buscando si el tema del contenido existe o no. Si existe retorna todos los contenidos que se han emitido con dicha temática a través de un array de tipo `Pelicula`, en caso contrario el array se imprimirá vacío.

**Clase ColeccionSeries**

- La clase `ColeccionSeries` es una extensión de la clase abstracta `BasicStreamableCollection` que es de tipo `Serie`.

- Posee un constructor que recibe un array de tipo `Serie` y lo establece como atributo privado `coleccion_`.

- Desarrolla la función `busquedaporNombre` que recibe un `string` y realiza un recorrido buscando si el nombre del contenido existe o no. Si existe retorna el contenido de tipo `Serie`, en caso contrario retorna un `false`.

- Desarrolla la función `busquedaporAno` que recibe un `number` y realiza un recorrido buscando si el año del contenido existe o no. Si existe retorna todos los contenidos que se han emitido en dicho año a través de un array de tipo `Serie`, en caso contrario el array se imprimirá vacío.

- Desarrolla la función `busquedaporPlataforma` que recibe un `string` y realiza un recorrido buscando si hay contenidos relacionados con dicha plataforma. Si existe retorna todos los contenidos que se han emitido en dicha plataforma a través de un array de tipo `Serie`, en caso contrario el array se imprimirá vacío.

- Desarrolla la función `busquedaporTematica` que recibe un `string` y realiza un recorrido buscando si el tema del contenido existe o no. Si existe retorna todos los contenidos que se han emitido con dicha temática a través de un array de tipo `Serie`, en caso contrario el array se imprimirá vacío.

- Desarrolla la función `busquedaporTemporadas` que recibe un `number` y realiza un recorrido buscando si los contenidos que poseen el número de temporadas indicadas. Si existen retorna todos los contenidos que se cumplan con dicho requisito a través de un array de tipo `Serie`, en caso contrario el array se imprimirá vacío.

#### Tests

A continuación, se procede a mostrar el resultado de las diferentes pruebas llevadas a cabo en las funciones de todas las clases que se han empleado en este ejercicio:

![Ejercicio-1](img/Captura%20desde%202023-03-05%2015-43-16.png)


### 2. Implementación de una lista y sus operaciones

Se requiere implementar una clase genérica que emule el comportamiento de `list` empleando únicamente `[]`.

La solución propuesta es la siguiente:

**Clase Lista<T>**

- La clase `Lista<T>` es de tipo genérico `T`.

- Posee un atributo privado `lista_` que es un array de tipo genérico `T`.

- Posee un constructor que recibe un array de contenido de tipo genérico `T` y lo establece como valor del atributo privado de la clase `lista_`.

- Posee un `getter` para obtener los valores de la lista.

- Posee una función `elemento_lista` para obtener el valor `T` de una posición concreta de la lista, recibiendo como parámetro el índice `n` de tipo `number`.

- Posee una función `append` que recibe una lista y la recorre insertando sus valores al final del array del atributo de la clase, `lista_`.

- Posee una función `concatenate` que recibe un array de listas y los recorre insertando sus valores al final del array del atributo de la clase, `lista_`.

- Posee una función `filter` que recibe un predicado lógico con el que se retornan los valores de la lista que cumplan con dicha condición.

- Posee una función `length` que devuelve la longitud del atributo `lista_`.

- Posee una función `map` que devuelve una lista después de aplicar la función indicada por parámetros (callback).

- Posee una función `reduce` que devuelve un valor de tipo genérico `T` después de aplicar la función indicada por parámetros (callback), según un acumulador inicial.

- Posee una función `reverse` que devuelve la lista en orden inverso.

- Posee una función `forEach` que devuelve un valor después de aplicar una función (instrucción) indicada.


#### Pruebas

![Ejercicio-2.1](img/Captura%20desde%202023-03-05%2018-43-22.png)

Se han llevado a cabo una serie de pruebas con todas y cada una de las funciones desarrolladas. Por desgracia la mayoría de ellas pese a que retornar lo mismo que se le indica en el código de los tests retornan error pese a tener que dar como correcto el resultado.

![Ejercicio-2.2](img/Captura%20desde%202023-03-05%2018-43-22.png)

Por ejemplo, en la prueba de la función `filter` se esperaba como resultado un `23` y se indico `23`. 

No obstante, se han desarrollado pruebas pese a este inconveniente en la realización de los tests, se emplea para ello los `console.log()` pertinentes en la propia función:

![Ejercicio-2.3](img/Captura%20desde%202023-03-05%2018-25-10.png)


### 3. Ampliando la biblioteca musical

Se continua con el desarrollo del programa de biblioteca músical.

En esta ocasión se modificaron las funciones que retornaban directamente la tabla, haciendo, en esta ocasión, que retornen directamente el dato para poder comprobar su funcionalidad en los test.

Además, tal y como se requería, se establece la clase Artista de tipo genérico `T`, como una extensión de las clases `Single` o `Disco`. Y `Discografía` como una clase genérica de tipo `T` que extiende a su vez las clases `Single` o `Disco`.

Otra novedad es la creación la clase `Single`, muy similar a la ya existente `Disco`.

Estos son algunas de las modifaciones que se han llevado a cabo en el programa.

Las pruebas realizadas dan éxito: 

![Ejercicio-3.1](img/Captura%20desde%202023-03-05%2018-25-10.png)

![Ejercicio-3.2](img/Captura%20desde%202023-03-05%2018-25-10.png)


## Conclusiones

En esta práctica se han podido llevar a cabo una serie de tres ejercicios de nivel medio de complejidad. Dichos ejercicios nos han podido acercar al uso de clases e interfaces genéricas. Se han mejorado aspectos indicados en las pasadas correcciones, tanto a nivel de implementación de código como a nivel de informe subsanando errores.

## Bibliografía

Para la realización de la práctica se ha requerido la consulta de los siguientes recursos:

- https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/
