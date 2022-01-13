# [FCE Map](https://fce-map.github.io/FCE-Map/)

Este proyecto esta hecho en base al FIUBA Map (https://fdelmazo.github.io/FIUBA-Map/) el código fué adaptado para la Facultad de Ciencias Económicas de la UBA. 

Todo el crédito es para el autor y los contribuyentes del FIUBA Map.


Mapa de materias y sus correlativas de la Facultad de Ciencias Económicas

Para las optativas, habría que agregar la cantidad de créditos de manera manual en la sección inferior de la página.

---

La idea de este proyecto es presentar de una manera interactiva y visualmente rica en información el plan de estudios de las carreras de la Facultad de Ciencias Económicas, Universidad de Buenos Aires, para saber que materias se pueden cursar, cuantos créditos se tienen actualmente y demás.

<a href="https://imgur.com/2mUdNHd"><img src="https://i.imgur.com/2mUdNHd.png" title="source: imgur.com" /></a>

- Tiene todas las carreras que se dan en la Facultad de Ciencias Económicas, en sus respectivos últimos planes de estudio.

- Todas las carreras incluyen todas las materias electivas y todas las materias de sus respectivas orientaciones.

- Trackea la cantidad de créditos que se tienen en la carrera, incluyendo si se quiere terminar con tésis/tpp, y que orientación se elige

- Base de datos! Se pueden marcar todas las materias apobradas y guardarlas bajo un padrón (o cualquier clave).

- Poner materias en final! Para no olvidarse los finales colgados.

---

Esta aplicación está hecha en React y todo su código fuente está en `src`. Para el front usa [Chakra](https://chakra-ui.com/). El sitio compilado en sí está en el directorio `docs`, y esto es lo que se sirve con github pages.

## Desarrollo

Para agregar un feature o fixear un issue hay que clonar el repositorio, instalar las dependencias con `npm install` y después correr la aplicación con `npm start`. En `localhost:3000/` va a estar corriendo la aplicación constantemente, y toda modificación que se haga al código se va a ver reflejada en la página.

Una vez terminados los cambios, con solo hacer un PR basta (porque la aplicación se compila automáticamente con cada push a master).

Hay que tener en cuenta que localmente no funciona la base de datos, para evitar que se le pueda pegar desde cualquier lado. Si se necesita arreglar algo que interactua con la db, pedirle a algun autor la API key correspondiente.



Proyecto actualmente en construcción, pero puede ser usado.
