import Box from './Box.js';

export default class Game {
  constructor(gameElement, resetButton) {
    this.gameElement = gameElement;
    this.resetButton = resetButton;
    this.colors = [
      'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown',
      'cyan', 'lime', 'teal', 'magenta', 'gray', 'navy', 'olive'
    ];
    this.boxes = [];
    this.firstBox = null;
    this.secondBox = null;
    this.matchedPairs = 0;
    this.startTime = null;
    this.timerInterval = null;

    // Añadir el manejador del clic en el botón de reinicio
    this.resetButton.addEventListener('click', () => this.startGame());

    // Inicializar el juego
    this.startGame();
  }

  startGame() {
    // Limpiar el grid y las cajas existentes
    this.gameElement.innerHTML = '';
    this.boxes = [];
    this.firstBox = null;
    this.secondBox = null;
    this.matchedPairs = 0;

    const savedState = JSON.parse(localStorage.getItem('gameState'));

    if (savedState) {
      // Recuperar el estado guardado
      const { rows, cols, boxes, matchedPairs, startTime } = savedState;
      this.matchedPairs = matchedPairs;
      this.startTime = new Date(startTime);
      this.gameElement.style.gridTemplateColumns = `repeat(${cols}, 60px)`;
      this.gameElement.style.gridTemplateRows = `repeat(${rows}, 60px)`;

      // Crear y agregar las cajas
      boxes.forEach(({ color, index, revealed }) => {
        const box = new Box(color, index);
        this.gameElement.appendChild(box.element);
        this.boxes.push(box);
        if (revealed) {
          box.reveal(); // Revelar las cajas que estaban abiertas
        }
      });

      // Iniciar el temporizador si ya había comenzado antes de la recarga
      if (this.startTime) {
        this.startTimer();
      }
    } else {
      // Solicitar filas y columnas para un nuevo juego
      const rows = parseInt(prompt("Número de filas:"));
      const cols = parseInt(prompt("Número de columnas:"));

      if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Número de filas y columnas deben ser números positivos.");
        return;
      }

      if (rows * cols % 2 !== 0) {
        alert("El número total de cajas debe ser par.");
        return;
      }

      let colorPairs = this.colors.slice(0, (rows * cols) / 2);
      colorPairs = [...colorPairs, ...colorPairs];
      colorPairs = colorPairs.sort(() => 0.5 - Math.random());

      // Ajustar la cuadrícula
      this.gameElement.style.gridTemplateColumns = `repeat(${cols}, 60px)`;
      this.gameElement.style.gridTemplateRows = `repeat(${rows}, 60px)`;

      // Crear y agregar las cajas
      colorPairs.forEach((color, index) => {
        const box = new Box(color, index);
        this.gameElement.appendChild(box.element);
        this.boxes.push(box);
      });

      // Iniciar el temporizador
      this.startTime = new Date();
      this.startTimer();
    }

    // Limpiar cualquier manejador de eventos previo y agregar el nuevo
    this.gameElement.removeEventListener('click', this.handleBoxClick);
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.gameElement.addEventListener('click', this.handleBoxClick);

    // Actualizar el LocalStorage en el inicio
    this.updateLocalStorage();
  }

  handleBoxClick(event) {
    const target = event.target;
    if (target.classList.contains('box')) {
      const box = this.boxes.find(b => b.index == target.dataset.index);

      if (!this.firstBox) {
        this.firstBox = box;
        box.reveal();
      } else if (!this.secondBox) {
        this.secondBox = box;
        box.reveal();
        this.checkForMatch();
      }
    }
  }

  checkForMatch() {
    if (this.firstBox.color === this.secondBox.color) {
      this.matchedPairs++;
      this.resetSelection();
      if (this.matchedPairs === this.boxes.length / 2) {
        const timeTaken = Math.floor((new Date() - this.startTime) / 1000);
        this.gameElement.innerHTML += `<div id="message">¡Has ganado! Tiempo: ${timeTaken} segundos</div>`;
        clearInterval(this.timerInterval); // Detener el cronómetro al ganar
        this.updateLocalStorage(); // Actualizar el estado al ganar
      }
    } else {
      setTimeout(() => {
        this.firstBox.hide();
        this.secondBox.hide();
        this.resetSelection();
      }, 200); // 200 milisegundos de retraso
    }
    this.updateLocalStorage(); // Actualizar el estado después de cada intento
  }

  resetSelection() {
    this.firstBox = null;
    this.secondBox = null;
  }

  startTimer() {
    const timerElement = document.getElementById('timer');
    this.timerInterval = setInterval(() => {
      const currentTime = Math.floor((new Date() - this.startTime) / 1000);
      timerElement.textContent = `Tiempo: ${currentTime} segundos`;
    }, 1000);
  }

  updateLocalStorage() {
    const boxesState = this.boxes.map(box => ({
      color: box.color,
      index: box.index,
      revealed: box.element.classList.contains('revealed')
    }));
    const cols = this.gameElement.style.gridTemplateColumns.split(' ').length;
    const rows = this.gameElement.style.gridTemplateRows.split(' ').length;
    localStorage.setItem('gameState', JSON.stringify({
      rows,
      cols,
      boxes: boxesState,
      matchedPairs: this.matchedPairs,
      startTime: this.startTime
    }));
  }
}