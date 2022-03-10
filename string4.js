export function findFullName(nameObject){


    let fullName;
    let First= nameObject.first_name;
    fullName=First.charAt(0).toUpperCase()+First.toLowerCase().slice(1);

    if(nameObject.middle_name !== undefined){
        let middle= nameObject.middle_name;
        fullName=fullName+" "+middle.charAt(0).toUpperCase()+middle.toLowerCase().slice(1);
    }

    let last= nameObject.last_name;
    fullName=fullName+" "+last.charAt(0).toUpperCase()+last.toLowerCase().slice(1);


    
    return fullName;
}