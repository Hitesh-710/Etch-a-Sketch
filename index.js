const container = document.querySelector('.container');
const header = document.querySelector('.header');
const buttons = document.querySelectorAll('button');
const btn1 = buttons[0];
const btn2 = buttons[1];
const btn3 = buttons[2];
const btn4 = buttons[3];
const btn5 = buttons[4];
let mode = 'black';
let shading = false;

const spaceleft = window.innerHeight - header.clientHeight - 40;

function createGrid(rows = 16, cols = 16) {

    container.innerHTML = ''; //clearing previous grid

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

            for (let j = 0; j < cols; j++) {
                const col = document.createElement('div');
                col.classList.add('cell')
                col.style.height = `${spaceleft / cols}px`;
                col.style.width = `${spaceleft / rows}px`;
                col.dataset.opacity = 0.1;
                row.appendChild(col);
            }
    }

}

createGrid();

btn1.addEventListener('click', () => {

    const rows = prompt('Enter the number of rows (max 100)');
    const cols = prompt('Enter the number of columns (max 100)');
    if (isNaN(rows) || isNaN(cols) || rows == null || cols == null || rows < 1 || cols < 1 || rows > 100 || cols > 100)
    {
        alert('Enter a valid integer between 1 and 100.');
        return;
    } else {
        createGrid(rows,cols);
    }    
})

btn2.addEventListener('click', () => {

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell =>{
        cell.style.backgroundColor = 'white';
    })

})

btn3.addEventListener('click', () => {
    mode = 'black';
    btn3.classList.add('active');
    btn4.classList.remove('active');
})

btn4.addEventListener('click', () => {
    mode = 'color';
    btn3.classList.remove('active');
    btn4.classList.add('active');
})

btn5.addEventListener('click', () =>{
    btn5.classList.toggle('active');
    shading = btn5.classList.contains('active');
})

container.addEventListener('mouseover', activeMode) //event delegation

function activeMode(event) {

    const cell = event.target;

    if(!cell.classList.contains('cell'))return; //only cells get affected

    if (shading) {
        let opacity = parseFloat(cell.dataset.opacity);
        if (mode == 'black') {
            cell.style.backgroundColor = `rgb(0,0,0,${opacity})`;
            cell.dataset.opacity = opacity + 0.1;
        } else {
            cell.style.backgroundColor = random(opacity);
            cell.dataset.opacity = opacity + 0.1;
        }
    } else {
        if (mode == 'black') {
            cell.style.backgroundColor = 'black';
        } else {
            cell.style.backgroundColor = random(1);
        }
    }
}

function random(opac) {
    return 'rgb(' + Math.floor(Math.random() * 255) + ','
     + Math.floor(Math.random() * 255) + ','
     + Math.floor(Math.random() * 255) + ','
     + opac + ')'; 
}