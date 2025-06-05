let buttons = document.querySelectorAll("button");
let display = document.querySelector("input");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText === "AC"){
            display.value = "";
        }
        else if(button.innerText === "DEL"){
            display.value = display.value.slice(0, -1);
        }
        else if(button.innerText === "="){
            display.value = eval(display.value);
        }
       else {
        display.value += button.innerText;
       }
    })
})
