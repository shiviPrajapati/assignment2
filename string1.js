export function convertStringToNumber(str){
    if(str.indexOf('$')>0){
        if(str.charAt(0)!=='-' || str.indexOf('$')>1){
            return 0;
        }
        
    }

    str=str.replace("$","");

    var format= /^(?:\-(?:\d+|\d{1,3}(?:,\d{3}))+)(?:\.\d+)?$/;
    var format1= /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;
    if(!(format.test(str))&&!(format1.test(str)))
      return 0;

    str=str.replace(",","");
    
    return parseFloat(str);
   

}