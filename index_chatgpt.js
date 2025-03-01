const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn');
const btn1 = btns[0]; // "New Grid"
const btn2 = btns[1]; // "Clear"
const btn3 = btns[2]; // "B&W Mode"
const btn4 = btns[3]; // "Color Mode"
const header = document.querySelector('.header');
const body = document.querySelector('body');

const spaceleft = window.innerHeight - header.clientHeight - 40;

let mode = 'bnw'; // Default mode is Black & White

// Function to apply the selected mode on hover
function applyMode(event) {
    const cell = event.target;

    if (!cell.classList.contains('cell')) return; // Ensure only cells are affected

    if (mode === 'bnw') {
        let currentOpacity = parseFloat(cell.style.opacity) || 0;
        if (currentOpacity < 1) {
            cell.style.opacity = currentOpacity + 0.1; // Gradually darken
        }
        cell.style.backgroundColor = 'black'; // Keep it black
    } else {
        let currentOpacity = parseFloat(cell.style.opacity) || 0;
        if (currentOpacity < 1) {
            cell.style.opacity = currentOpacity + 0.1; // Gradually darken
        }
        cell.style.backgroundColor = random(); // Random color mode
    }
}

// Function to create grid
function createGrid(rows = 16, cols = 16) {
    container.innerHTML = ''; // Clear existing grid

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${spaceleft / cols}px`;
            cell.style.height = `${spaceleft / rows}px`;
            cell.style.opacity = '0'; // Start fully transparent in B&W mode
            cell.style.border = '1px solid black';

            row.appendChild(cell);
        }
    }
}

// Default 16x16 grid
createGrid();

// Attach single event listener to the container (Event Delegation)
container.addEventListener('mouseover', applyMode);

// New Grid Button
btn1.addEventListener('click', () => {
    const rows = prompt('Enter number of rows (max 100)');
    const cols = prompt('Enter number of columns (max 100)');

    if (!rows || !cols || isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1 || rows > 100 || cols > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    createGrid(rows, cols);
});

// Clear Button
btn2.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.style.opacity = '0';
    });
});

// B&W Mode Button
btn3.addEventListener('click', () => {
    mode = 'bnw'; // Change mode
    btn3.classList.add('active');
    btn4.classList.remove('active');
});

// Color Mode Button
btn4.addEventListener('click', () => {
    mode = 'color'; // Change mode
    btn4.classList.add('active');
    btn3.classList.remove('active');
});

// Function to generate random colors
function random() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
