let display = document.getElementById("display");
let lastResult = document.getElementById("last-result-display");
let buttons = Array.from(document.getElementsByClassName("calculator-button"));
let sum;
let lastKey;
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText)
        {
            case 'C':
                display.innerText = "";
                lastResult.innerHTML = display.innerText;
                lastKey = "C";
                break;

            case '0':
                if(display.innerText == "" || lastKey == "=") {
                    break;
                }    
                else{
                    display.innerText += "0";
                    lastKey = "0";
                }
                break;

            case '1':
                if(lastKey == "=") {
                    display.innerText = "1";
                    lastKey = "1";
                    break;
                }    
                else{
                    display.innerText += "1";
                    lastKey = "1";}
                break;

            case '2':
                if(lastKey == "=") {
                    display.innerText = "2";
                    lastKey = "2";
                    break;
                }    
                else{
                    display.innerText += "2";
                    lastKey = "2";}
                break;

            case '3':
                if(lastKey == "=") {
                    display.innerText = "3";
                    lastKey = "3";
                    break;
                }    
                else{
                    display.innerText += "3";
                    lastKey = "3";}
                break;

            case '4':
                if(lastKey == "=") {
                    display.innerText = "4";
                    lastKey = "4";
                    break;
                }    
                else{
                    display.innerText += "4";
                    lastKey = "4";}
                break;

            case '5':
                if(lastKey == "=") {
                    display.innerText = "5";
                    lastKey = "5";
                    break;
                }    
                else{
                    display.innerText += "5";
                    lastKey = "5";}
                break;
            
            case '6':
                if(lastKey == "=") {
                    display.innerText = "6";
                    lastKey = "6";
                    break;
                }    
                else{
                    display.innerText += "6";
                    lastKey = "6";}
                break;

            case '7':
                if(lastKey == "=") {
                    display.innerText = "7";
                    lastKey = "7";
                    break;
                }    
                else{
                    display.innerText += "7";
                    lastKey = "7";}
                break;
            
            case '8':
                if(lastKey == "=") {
                    display.innerText = "8";
                    lastKey = "8";
                    break;
                }    
                else{
                    display.innerText += "8";
                    lastKey = "8";}
                break;

            case '9':
                if(lastKey == "=") {
                    display.innerText = "9";
                    lastKey = "9";
                    break;
                }    
                else{
                    display.innerText += "9";
                    lastKey = "9";}
                break;

            case '+':
                if((lastKey == "+") 
                || (lastKey == "-") 
                || (lastKey == "*")
                || (lastKey == "/")
                || (display.innerText == "")) {
                    break;
                }    
                else{
                    display.innerText += "+";
                    lastKey = "+";
                }
                break;

            case '-':
                if((lastKey == "+") 
                || (lastKey == "-") 
                || (lastKey == "*")
                || (lastKey == "/")
                || (display.innerText == "")) {
                    break;
                }    
                else{
                    display.innerText += "-";
                    lastKey = "-";
                }
                break;

            case '*':
                if((lastKey == "+") 
                || (lastKey == "-") 
                || (lastKey == "*")
                || (lastKey == "/")
                || (display.innerText == "")) {
                    break;
                }    
                else{
                    display.innerText += "*";
                    lastKey = "*";
                }
                break;

            case '/':
                if((lastKey == "+") 
                || (lastKey == "-") 
                || (lastKey == "*")
                || (lastKey == "/")
                || (display.innerText == "")) {
                    break;
                }    
                else{
                    display.innerText += "/";
                    lastKey = "/";
                }
                break;

            case '=':
                if((lastKey == "+") 
                || (lastKey == "-") 
                || (lastKey == "*")
                || (lastKey == "/")
                || (display.innerText == "") 
                || (lastKey == "=")) {
                    break;
                }
                else{
                sum = eval(display.innerText);
                lastResult.innerHTML = display.innerText + " = " + sum;
                display.innerText = sum;
                lastKey = "=";
                }
                break;                
                
            default:
                display.innerText += e.target.innerText;
        }
    });
});