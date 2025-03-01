        const container = document.querySelector('.container');
        const btns = document.querySelectorAll('.btn');
        const btn1 = btns[0]; //Selecting first and second button from the nodelist
        const btn2 = btns[1];
        const btn3 = btns[2];
        const btn4 = btns[3];
        const header = document.querySelector('.header');
        const body = document.querySelector('body');

        const spaceleft = window.innerHeight - header.clientHeight - 40; //window.innerHeight and .innerWidth give the height and w including the scrollbar if present
        
        //Custom grid code
        btn1.addEventListener('click', () => {
            const rows = prompt('Enter number of rows');
            const cols = prompt('Enter number of columns');
            
            // Check if user cancels the prompt and stops the function before html is removed
            if (rows === null || cols === null) {
                return;
            }

            container.innerHTML = '';
            
            if (rows === '' || cols === '') {
                alert('Please enter a valid number');
                return;
            }else if (rows > 100 || cols > 100) {
                alert('Inputs cannot be greater than 100');
                return;
            }else if (rows < 1 || cols < 1) {
                alert('Inputs cannot be less than 1');
                return;
            }else if (isNaN(rows) || isNaN(cols)) {
                alert('Please enter a valid number');
                return;
            }

            for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);
            
            for (let j = 0; j < cols; j++) {
                //adding n divs in each row of the grid 
                const cell = document.createElement('div');
                cell.classList.add('cell');
                // Set the width and height of the cell to be the same
                cell.style.width = `${spaceleft / cols}px`;
                cell.style.height = `${spaceleft / rows}px`;
                cell.style.border = '1px solid black';
                row.appendChild(cell);
                }
            }
            
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.addEventListener('mouseover', () => {
                    cell.style.backgroundColor = `black`;
                });
            });
        });
        
        //Default 16x16 grid
        for (let i = 0; i < 16; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);

            for (let j = 0; j < 16; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.width = `${spaceleft / 16}px`;
                cell.style.height = `${spaceleft / 16}px`;
                cell.style.border = '1px solid black';
                row.appendChild(cell);
            }
        }
        
        //Color code each cell
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = `black`;
            });
        });
        
        //Clear code
        btn2.addEventListener('click', () => {
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.style.backgroundColor = 'white';
            });
        });
        
        //Black Mode
        btn3.addEventListener('click', () => {
            btn3.classList.add('active');
            btn4.classList.remove('active');
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.addEventListener('mouseover', () => {
                    cell.style.backgroundColor = 'black';
                })
            })
        })

        //Color Mode
        btn4.addEventListener('click', () => {
            btn4.classList.add('active');
            btn3.classList.remove('active');
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.addEventListener('mouseover', () => {
                    cell.style.backgroundColor = `${random()}`;
                })
            })
        })

        function random() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
            console.log(color);
        }