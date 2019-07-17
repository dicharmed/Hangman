let game1

// document.querySelector('#guess-letter-js').addEventListener('keypress', e => 
window.addEventListener('keypress', (e) => {
    // e.target.value = ''
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)    
    // puzzle = game1.puzzle
    // isWasted ? span.textContent = isWasted :  span.textContent = puzzle

    render()
})

const render = () => {
    // span.textContent = game1.puzzle
    span.innerHTML = ''
    res.textContent = game1.msgStatus

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')        
        letter !== ' ' ? letterEl.className = 'letter-element letter-element--border-bottom': letterEl.className = 'letter-element'
        letterEl.textContent = letter
        span.appendChild(letterEl)
    })
}


const startGame = async() => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.getElementById('btn-reset').addEventListener('click', startGame)

startGame()



