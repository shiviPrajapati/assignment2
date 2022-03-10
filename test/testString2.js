import {splitIPAddress } from '../string2.js'
let componants=0;
function getComponant(str){
    componants=(splitIPAddress(str));
    if(componants.length===0){
        console.log("Wrong IP Address");
    }
    else{
        console.log(componants);
    }
}

getComponant("111.139.161.143");
getComponant("1121.139.161.143");
getComponant("111.139a.161.143");
getComponant("111.139.161");