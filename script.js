let display = document.getElementById("display");
let lastResult = document.getElementById("last-result-display");
let buttons = Array.from(document.getElementsByClassName("calculator-button"));
let sum;
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '0':    
                if(display.innerText == 0) {
                    display.innerText = "";
                    break;
                }
                else{
                    display.innerText += "0";
                }
                break;
            case '=':
                sum = eval(display.innerText);
                display.innerText = sum;
                lastResult = display.innerText;
                document.getElementById("last-result-display").innerHTML = lastResult;
                break;
                
            default:
                display.innerText += e.target.innerText;
        }
    });
});