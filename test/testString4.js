import {findFullName } from '../string4.js'
let name;
function getName(str){
    name=(findFullName(str));
    if(name===""){
        console.log("no name");
    }
    else{
        console.log(name);
    }
}


getName({"first_name": "JoHN", "last_name": "SMith"});
getName({"first_name": "ram", "last_name": "YADAV"})
getName({"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"});