let lenghtRange = document.getElementById("lengthRange");
let lengthValue = document.getElementById("lengthValue");
let passBox = document.querySelector(".passBox");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let numbers = document.getElementById("numbers");
let special = document.getElementById("special");
let generate = document.getElementById("generate");
let password="";



lenghtRange.addEventListener("input",()=>{
    lengthValue.innerText=lenghtRange.value;
})




generate.addEventListener("click",()=>{
    passBox.value=generatePassword()
})




function generatePassword(){
    let {char,leng} = getPasswordCharacters();
    let password="";
    for(let i=0;i<lenghtRange.value;i++){
        let randomChar = Math.floor(Math.random() * leng);
        password += char[randomChar];
    } 
    return password;
}




function getPasswordCharacters(){
    let char="";
    let leng=0;
    if(lowerCase.checked){
        char += "abcdefghijklmnopqrstuvwxyz";
        leng += 26;
    }
    if(upperCase.checked){
        char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        leng += 26;
    }
    if(numbers.checked){
        char += "0123456789";
        leng += 10;
    }
    if(special.checked){
        char += "!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+";
        leng += 26;
    }
    return {char,leng};
}



document.getElementById("copy").addEventListener("click",()=>{
    navigator.clipboard.writeText(passBox.value);
})











// let inputSlider = document.getElementById("inputSlider");
// let sliderValue = document.getElementById("sliderValue");
// let passBox = document.getElementById("passBox");
// let lowercase = document.getElementById("lowercase");
// let uppercase = document.getElementById("uppercase");
// let numbers = document.getElementById("numbers");
// let symbols = document.getElementById("symbols");
// let genBtn = document.getElementById("genBtn");
// let copyIcon = document.getElementById("copyIcon");


// // Showing input slider value 
// sliderValue.textContent = inputSlider.value;
// inputSlider.addEventListener('input', ()=>{
//     sliderValue.textContent = inputSlider.value;
// });

// genBtn.addEventListener('click', ()=>{
//     passBox.value = generatePassword();
// })

// let lowerChars = "abcdefghijklmnopqrstuvwxyz";
// let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let allNumbers = "0123456789";
// let allSymbols = "~!@#$%^&*"; 

// // Function to generate Password
// function generatePassword(){
//     let genPassword = "";
//     let allChars = "";

//     allChars  += lowercase.checked ? lowerChars : "";
//     allChars  += uppercase.checked ? upperChars : "";
//     allChars  += numbers.checked ? allNumbers : "";
//     allChars  += symbols.checked ? allSymbols : "";


//     if(allChars == "" || allChars.length == 0){
//         return genPassword;
//     }
    

//     let i = 1;
//     while(i<=inputSlider.value){
//         genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
//         i++;
//     }

//     return genPassword;
// }

// copyIcon.addEventListener('click', ()=>{
//     navigator.clipboard.writeText(passBox.value);
// })