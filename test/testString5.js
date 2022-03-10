import {combineString } from '../string5.js'
let sentance;
function getString(arr){
    sentance=(combineString(arr));
    if(sentance===""){
        console.log("empty array");
    }
    else{
        console.log(sentance);
    }
}

getString(["the", "quick", "brown", "fox"]);
getString([]);
