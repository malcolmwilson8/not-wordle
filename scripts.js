// createAnswerContainer = () => {
//     const answerContainer = document.getElementById('answer-container');
    
//     for(let i = 0; i < 30; i++){
//         const square = document.create 
//     }

// }

const squares = document.querySelectorAll('.square');
let selectedSquares = [];

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    if (selectedSquares.length > 0) {
      selectedSquares[selectedSquares.length - 1].textContent = '';
      selectedSquares.pop();
    }
  } else if (event.key.match(/^[a-z]$/i)) {
    const letter = event.key.toUpperCase();
    if (selectedSquares.length < squares.length) {
      const square = squares[selectedSquares.length];
      square.textContent = letter;
      selectedSquares.push(square);
      square.classList.add('selected');
    }
  }
});