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

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Autor

- **Rosmén Valencia** - [PerfilGitHub](https://github.com/RosmenPro)

---

# Memory Game with LocalStorage (game_pair_matching)

This is a memory game project that allows players to match colored cards. The game state, including the opened cards and timer, is saved in LocalStorage, enabling players to continue where they left off after refreshing the page.

## Features

- **Card Interaction**: Players can click on cards to try to match them.
- **Persistent Game State**: Uses LocalStorage to store the current game state, allowing players to resume their game after a refresh.
- **Timer**: A timer that measures the elapsed time during the game.

## Technologies Used

- **JavaScript**: Main programming language for the game logic.
- **HTML/CSS**: Structure and design of the user interface.
- **LocalStorage**: Browser storage for game state.

## Installation

1. Clone this repository or download the files.
2. Open the `index.html` file in your browser.

## Usage

1. When the game loads, you will be asked to enter the number of rows and columns. Ensure the total number of cards is even.
2. Play by matching the cards. The game state will be automatically saved in LocalStorage.
3. If you refresh the page, the game will restore the previous state, including the timer.

## Code Structure

- **Game.js**: Main class that handles the game logic, including card creation, match checking, and timer management.
- **Box.js**: Class representing each card in the game, with properties like color, open state, and availability.
- **Timer.js**: Class that manages the game timer.

## Contributions

Contributions are welcome. If you have suggestions or improvements, feel free to create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Author

- **Rosmén Valencia** - [GitHubProfile](https://github.com/RosmenPro)





