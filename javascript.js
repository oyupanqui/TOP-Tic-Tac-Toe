let gameMode;
const cells = document.getElementsByClassName("cell")

function resetGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
    }
}
function vs(elem) {
    gamemode = elem
    return resetGame()
}

const gameBoard = () => {
    
}