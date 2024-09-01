let string = "";
let memory = 0; 
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'Dlt') {
            string = string.slice(0, -1); 
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === '√') {
            string = Math.sqrt(eval(string)); 
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === '%') {
            string = eval(string) / 100; 
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'M+') {
            memory += parseFloat(string || 0); 
            string = ""; 
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'M-') {
            memory -= parseFloat(string || 0); 
            string = ""; 
            document.querySelector('input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});