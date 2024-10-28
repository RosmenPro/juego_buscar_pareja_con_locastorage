# Juego de Memoria con LocalStorage (juego_buscar_pareja)

Este es un proyecto de juego de memoria que permite a los jugadores emparejar cartas de colores. El estado del juego, incluyendo las cartas abiertas y el cronómetro, se guarda en LocalStorage para que los jugadores puedan continuar donde lo dejaron después de recargar la página.

## Funcionalidades

- **Interacción de cartas**: Los jugadores pueden hacer clic en las cartas para intentar emparejarlas.
- **Estado del juego persistente**: Utiliza LocalStorage para almacenar el estado actual del juego, lo que permite a los jugadores retomar su partida tras un refresh.
- **Cronómetro**: Un cronómetro que mide el tiempo transcurrido durante la partida.

## Tecnologías Utilizadas

- **JavaScript**: Lenguaje de programación principal para la lógica del juego.
- **HTML/CSS**: Estructura y diseño de la interfaz del usuario.
- **LocalStorage**: Almacenamiento del estado del juego en el navegador.

## Instalación

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador.

## Uso

1. Al cargar el juego, se te pedirá que ingreses el número de filas y columnas. Asegúrate de que el total de cartas sea un número par.
2. Juega emparejando las cartas. El estado del juego se guardará automáticamente en LocalStorage.
3. Si recargas la página, el juego restaurará el estado anterior, incluyendo el cronómetro.

## Estructura del Código

- **Game.js**: Clase principal que maneja la lógica del juego, incluyendo la creación de cartas, verificación de emparejamientos y gestión del cronómetro.
- **Box.js**: Clase que representa cada carta en el juego, con propiedades como color, estado de apertura y disponibilidad.
- **Timer.js**: Clase que gestiona el cronómetro del juego.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias o mejoras, no dudes en crear un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

## Autor

- **Rosmén Valencia** - [TuPerfilGitHub](https://github.com/tu-usuario)
