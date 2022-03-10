import {convertStringToNumber } from '../string1.js'
let convertNumber=0;
function getNumber(str){
    convertNumber=(convertStringToNumber(str));
    if(convertNumber===0){
        console.log("Wrong format of number");
    }
    else{
        console.log(convertNumber);
    }
}

getNumber("$100.45");
getNumber("-$1100");
getNumber("11$00");
getNumber("-1100");
getNumber("$1,002.22");
getNumber("-110a0");
getNumber("-$123");
