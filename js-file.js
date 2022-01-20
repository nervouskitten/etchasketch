const DEFAULT_COLOR = '#333333'
const DEAFAULT_NUM = 16;

let currentColor = DEFAULT_COLOR;
let currentNum = DEAFAULT_NUM;
let clearButton = document.getElementById("clearButton");


const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (c = 0; c <(rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }   
}

makeRows(16,16);

container.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = currentColor;
});

function setCurrentColor(newColor){
    currentColor = newColor
    console.log(currentColor)
}

const colorPicker = document.getElementById('colorPicker')
colorPicker.onchange = (e) => setCurrentColor(e.target.value)

clearButton.addEventListener("click", clearBoard)

function clearBoard() {
    currentNum = 0;

    while (currentNum > 100 || currentNum < 1){
        currentNum = prompt("How many rows and columns would you like? \n\
        (100 is the highest I can go)");
    };

    container.innerHTML = ''   
    makeRows(currentNum, currentNum);
}
