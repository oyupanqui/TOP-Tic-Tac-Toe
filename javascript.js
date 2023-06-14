let gameMode;

function vs(elem) {
    gamemode = elem
    resetGame()
}

const cells = document.getElementsByClassName("cell")
const left = document.getElementsByClassName("left-panel")
const right = document.getElementsByClassName("right-panel")

let play = 0

let P1 = []
let P2 = []

const winCon = [["11", "12", "13"], ["21", "22", "23"], ["31", "32", "33"],
    ["11", "21", "31"], ["12", "22", "32"], ["13", "23", "33"],
    ["11", "22", "33"], ["13", "22", "31"]]

function resetGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
        left[0].innerHTML = "Player One's turn"
        P1 = []
        P2 = []
        play = 0
        cells[i].setAttribute("onClick", "choice(event)")
    }
}

function choice (event) {
    right[0].innerHTML = ''
    left[0].innerHTML = ''
    const val = event.target.classList[1]
    event.target.removeAttribute("onClick")
    play += 1
    if (play % 2 === 0) {
        event.target.innerHTML = '<img src="img/yang.jpeg" draggable=false>'
        left[0].innerHTML = "Player One's turn"
        P2.push(val)
        
    } else {
        event.target.innerHTML = '<img src="img/yin.jpeg" draggable=false>'
        right[0].innerHTML = "Player Two's turn"
        P1.push(val)
    }
    setTimeout(() => {
        checkWin()
        if (play == 9) {
            alert('TIE')
            resetGame()
        }
    }, 1000);
}

function checkWin () {
    for (let i = 0; i<winCon.length; i++) {
        if (winCon[i].every(r => P1.includes(r))) {
            right[0].innerHTML = ''
            left[0].innerHTML = 'Player One wins!'
            setTimeout(() => {
                resetGame()
            }, 2000)
            
        } else if (winCon[i].every(r => P2.includes(r))) {
            right[0].innerHTML = 'Player Two wins!'
            left[0].innerHTML = ''
            setTimeout(() => {
                resetGame()
            }, 2000)
        }
    }
}
