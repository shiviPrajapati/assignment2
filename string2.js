export function splitIPAddress(str){

    let component=[];
    var format= /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    if(!(format.test(str)))
      return component;

    component=str.split(/[.]/);
    return component;
}