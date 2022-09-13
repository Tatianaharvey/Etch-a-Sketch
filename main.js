const container = document.querySelector('.container');

function makeGrid (rows, cols) {
    removeAllChildNodes(container);
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', changeGridColor)
    container.appendChild(cell).className = "gridItem";
    };  
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function changeGridColor(e) {
    let colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CADDBF', 
    '#9BF6FF', '#A0C4FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];
    let randomColor = Math.floor(Math.random() * colors.length);
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = colors[randomColor];

}

const resetGrid = document.querySelector('.resetGrid') 

resetGrid.addEventListener ('click', () => {
    window.location.reload();
})

const gridSize = document.querySelector('.gridSize');

gridSize.addEventListener("click", changeSize);

function changeSize() {
    let newSize = prompt("Type a number between 1 and 100 to change the grid size");
    let num = parseInt(newSize);
    if (num > 1 && num <= 100) {
        makeGrid(num,num);
    } else {
        alert("Please enter a digit between 1 and 100.")
        changeSize()
    }
}

// Main
makeGrid(16,16);