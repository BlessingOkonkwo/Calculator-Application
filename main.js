const display = document.getElementById("outputscreen");
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.value = '';
        } else if (item.id == 'backspace') {
            let string = display.value.toString();
            display.value = string.substring(0, string.length - 1);
        } else if (display.value != '' && item.className == 'equal') {
            display.value = eval(display.value);
        } else if (display.value == '' && item.className == 'equal') {
            display.value = 'Empty!';
            setTimeout(() => (display.value = ''),.2000);
        } else {
            display.value += item.id;
        }
    }

})