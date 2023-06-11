let gameMode;

function vsAI() {
    return gameMode = 'ai'
}

function vsPlayer() {
    return gameMode = 'player'
}

const cells = document.getElementsByClassName("cell")
console.log(cells)
function resetGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
    }
}