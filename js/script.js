/*assignment:
create grid of 16 boxes to go inside container
make it so that the number of boxes is adjustable, but conforms to total size of 960px width/height
add a button to send a popup to users asking for the number of squares per side for new grid
    once entered, the existing grid should be removed, and a new grid generated in the same total space as before
    limit user input to max of 100
set up a "hover" effect so that the grid divs change color when your mouse passes over them.
    figure out how to define/reference individual divs from the grid ---Actually not needed; 'row' will probably do.
    event listener; if div is hovered, function change color;
    change color either by using a class, or changing background color with JS*/


let columns, rows, column, row;
let i, j, k;
let input, integerInput;

const button = document.createElement(`button`);
    button.setAttribute(`id`, `reset`);
    button.textContent = `Start Over`;
    button.addEventListener(`click`, resetGrid);

document.body.appendChild(button);

let grid = document.createElement(`div`);
grid.setAttribute(`id`, `grid`);

function setGrid(integerInput) {
    if (integerInput) {
        clearGrid();
        rows = `${integerInput}`;
        columns = `${integerInput}`;    
        createGrid();
    } else {
        rows = 16
        columns = 16
        createGrid();
    }
}

function createGrid() {
    for (i = 0; i < columns; ++i) {
        column = document.createElement(`div`);
        column.classList.add(`column`);
        for (j = 0; j < rows; ++j) {
            row = document.createElement(`div`);
            row.classList.add(`row`);
            column.appendChild(row);
        }
        grid.appendChild(column)
    }
    let allRows = grid.querySelectorAll('div.row');
    console.log(allRows);
    allRows.forEach(row => {row.addEventListener(`mouseover`, () => {
        row.style.backgroundColor = "blue";
        });
    })
}

document.body.appendChild(grid);

function clearGrid() {
    while (column.firstChild) {
        column.removeChild(column.firstChild);
    }                 
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
        };   
}

function resetGrid() {
    for (k = 0; ; k++) {
    input = prompt(`How many squares per side would you like for your new SketchPad? Please enter any number up to 100.`, ``);
    integerInput = +input;
    if (integerInput == 0) {
        alert(`Cancelled`);
        break;
    } else if (!integerInput) {
        alert(`Please enter a valid number`);
    } else if (integerInput > 100) {
        alert(`That number was too high. Please enter any number up to 100`);
    } else if (integerInput) {
        setGrid(integerInput);
        break;
    }
}
}

setGrid();