var number = 0;
var string_number = document.getElementById('main-number');

function func_down() {
    number = number - 1;
    string_number.innerHTML = number;
    if (number < -9) {
        string_number.style.color = 'red';
    } else if (number > -10 && number < 10) {
        string_number.style.color = 'black';
    }
}
function func_up() {
    number = number + 1;
    string_number.innerHTML = number;
    if (number > 9) {
        string_number.style.color = 'green';
    } else if (number < 10 && number > -10) {
        string_number.style.color = 'black';
    }
}
function func_reset() {
    number = 0;
    string_number.innerHTML = number;
    string_number.style.color = 'black'
}