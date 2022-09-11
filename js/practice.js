//create grid of 16 boxes to go inside container
//make it so that the number of boxes is adjustable, but conforms to total size of 960px width/height
    //# of boxes can be determined by loop
    //box divs created in loop
    //set height for each row...
    //do I need to add some sort of break, so that every row/column is even?

    const container = document.querySelector(`#container`);
    let square;
    let heightSquare;
    let heightSet;
    let squareArray = [];
    
    function createSquare() {
        square = document.createElement(`div`);
        square.classList.add(`square`);
        container.appendChild(square);
    }
    
    function createGrid(square, number) {
        for (i = 1; i <= number**2; i++) {
            square = document.createElement(`div`);
            square.classList.add(`square`);
            container.appendChild(square);
            squareArray.push(square);
        };
    }
    
    
    
    /*function createGrid(square, number) {
        for (i = 1; i < number**2; i++) {
            square = document.createElement(`div`);
            square.classList.add(`square`);
            container.appendChild(square);
            squareArray.push(square);
        };
    
    }
    */
    
    /*function setRows(square, number) {
        for (square of squareArray) {
            newLine = Math.sqrt(number) + 1;
    
            heightSet = squareArray[`${+heightSquare + 1}`];
        }
    }
    */
    
    
    /*function setRowHeight(number) {
        for (square of squareArray) {
            heightSquare = Math.sqrt(number);
            heightSet = squareArray[`${+heightSquare + 1}`];
        }
    }
    */
    
    createGrid(square, 5);
    
    
    
    //createGrid(square, 17);
    //add prompt/eventListener to get input from user & put that number into function
    //number must be integer



    /*function createGrid(cell, number) {
    for (i = 1; i <= number**2; i++) {
        cell = document.createElement(`div`);
        cell.classList.add(`cell`);
        grid.appendChild(cell);
        cellArray.push(cell);
    };
}

createGrid(cell, 5);

*/


function resetGrid() {
    column.removeChild(row);
    grid.removeChild(column); 
    for (l = 0; l < columns; ++l) {
        column = document.createElement(`div`);
        column.classList.add(`column`);
        for (m = 0; m < rows; ++m) {
            row = document.createElement(`div`);
            row.classList.add(`row`);
            row.textContent = l + `-` +m;
            column.appendChild(row);
        }
        grid.appendChild(column)
    }
}

function clearGrid() {
    for (l = 0; l < columns; ++l) {
        grid.remove(column);
    }    

}