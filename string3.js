export function findMonth(str){

    let month;

    var format= /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if(!(format.test(str)))
      return 0;

    month=str.split(/[/]/);
    return month[0];
}