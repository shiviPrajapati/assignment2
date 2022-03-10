import {findMonth } from '../string3.js'
let month=0;
function getMonth(str){
    month=(findMonth(str));
    if(month===0){
        console.log("Wrong Date format");
    }
    else{
        console.log(month);
    }
}

getMonth("10/01/2021");
getMonth("12/02/2000");
getMonth("120/44/2304");
getMonth("111.139.161");