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
        event.target.innerHTML = '<img src="img/yang.jpeg">'
        P2.push(val)
        
    } else {
        event.target.innerHTML = '<img src="img/yin.jpeg">'
        P1.push(val)
    }
    setTimeout(() => {
        checkWin()
    }, 1000);
}

function checkWin () {
    for (let i = 0; i<winCon.length; i++) {
        if (winCon[i].every(r => P1.includes(r))) {
            alert('P1 wins')
            resetGame()
        } else if (winCon[i].every(r => P2.includes(r))) {
            alert('P2 wins')
            resetGame()
        } else if (play > 9) {
            alert('TIE')
            resetGame()
        }
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
