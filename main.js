// let outputScreen = document.getElementById("outputscreen");

// function display(num){
//     outputScreen.value =+ num;
// }

// function calculate() {
//     try {
//         outputScreen.value = eval(outputScreen.value);
//     }

//     catch(err) {
//         alert('Invalid')
//     }
// }

// function clear() {
//     outputScreen.value = ""
// }

// function del() {
//     outputScreen.value = outputScreen.value.slice(0, -1);
// }


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
        // item.onclick(display.value = '');
    }

})