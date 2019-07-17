let isWasted = ''
let span = document.querySelector('#puzzle')
let res = document.querySelector('#res-js')
let inputBox = document.querySelector('#guess-letter-js')


class Hangman {
    constructor(word, numberOfGuesses) {
        this.word = word.toLowerCase().split('')
        this.numberOfGuesses = numberOfGuesses   
        this.guessedLetters = []    
        this.status = 'playing'
    }

    get puzzle() {
        let puzzle = ''      
        this.word.forEach(letter => {
            if(this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if(isUnique) {
            if(this.numberOfGuesses > 0) {
                this.guessedLetters.push(guess.toLowerCase())
            } 
        }
    
        if(isUnique && isBadGuess && this.numberOfGuesses >= 1) {
            this.numberOfGuesses--
        }  
        res.textContent = this.msgStatus
    }
    
    get msgStatus() {    
        const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ')
        let msg = ''
        if(finished) {
            this.status = 'finished'    
            msg = 'Congrats! You guessed the word!'    
        }else if(this.numberOfGuesses <= 0) {
            this.status = 'failed'
            msg = `Nice try! The word was "${this.word.join('')}"`
        }else {
            this.status = 'playing'
            msg = `Guesses left: ${this.numberOfGuesses}`
        }    
        return msg    
    }
}











