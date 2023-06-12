let gameMode;
const cells = document.getElementsByClassName("cell")

let play = 0

let P1 = []
let P2 = []

function choice (event) {
    const val = event.target.classList[1]
    event.target.removeAttribute("onClick")
    play += 1
    console.log(play)
    if (play % 2 === 0) {
        P2.push(val)
        console.log('Player 2')
    } else {
        P1.push(val)
        console.log('Player 1')
    }
    console.log(P1.values)
    console.log(P2.values)
    for (let i = 0; i<winCon.length; i++) {
        if (P1.toString() == winCon[i].toString()) {
            alert('P1 wins')
            resetGame()
        }
        if (P2.toString() == winCon[i].toString()) {
            alert('P2 wins')
            resetGame()
        }
    }
    if (play == 9) {
        alert('TIE')
        resetGame()
    }
}

const winCon = [["11", "12", "13"], ["21", "22", "23"], ["31", "32", "33"],
    ["11", "21", "31"], ["12", "22", "32"], ["13", "23", "33"],
    ["11", "22", "33"], ["13", "22", "31"]]

function resetGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
        P1 = []
        P2 = []
        play = 0
        cells[i].setAttribute("onClick", "choice(event)")
    }
}

function vs(elem) {
    gamemode = elem
    resetGame()
}
