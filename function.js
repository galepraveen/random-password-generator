console.log("connected");

const passwordLength = document.querySelector('#password-length');
const upperCaseBox = document.querySelector('.upper-case input');
const lowerCaseBox = document.querySelector('.lower-case input');
const numbersBox = document.querySelector('.numbers input');
const symbolsBox = document.querySelector('.symbols input');
const passwordInputBox = document.querySelector('.input-password');
const generateBtn = document.querySelector('.btn');

const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const specialSymbols = "~!@#$%^&*()_?{}[]";

const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const truncateString = (str,len)=>{
    if(str.length > len){
        return str.substr(0,len);
    }
    return str;
}

let copyPassword;

const generatePassword = (password = "")=>{
    if(upperCaseBox.checked){
        password += getRandomData(upperCaseCharacters);
    }

    if(lowerCaseBox.checked){
        password += getRandomData(lowerCaseCharacters);
    }

    if(numbersBox.checked){
        password += getRandomData(numbers);
    }

    if(symbolsBox.checked){
        password += getRandomData(specialSymbols);
    }

    if(password.length < passwordLength.value){
        return generatePassword(password);
    }

    console.log(password);
    password = truncateString(password, passwordLength.value);
    passwordInputBox.textContent = password;
    copyPassword = password;
}

generateBtn.addEventListener('click', ()=>{
    generatePassword();
})