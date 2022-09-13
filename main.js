const container = document.querySelector('.container');

function makeGrid (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', changeGridColor)
        container.appendChild(cell).className = "gridItem";
    };  
};

function changeGridColor(e) {
    let colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CADDBF', 
    '#9BF6FF', '#A0C4FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];
    let randomColor = Math.floor(Math.random() * colors.length);
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = colors[randomColor];

}

makeGrid(16, 16);

const resetGrid = document.querySelector('.resetGrid') 

resetGrid.addEventListener ('click', () => {
    window.location.reload();
})

