export function combineString(arr){

    
    if(arr.length===0){
        return "";
    }
    let str=arr[0];
    for(let i=1;i<arr.length;i++){
        str=str+" "+arr[i];
    }

    return str;
}