export function splitIPAddress(str){
 
    let component=[];

    component=str.split(/[.]/);
    let componentLength=component.length;
    if(componentLength!==4){
      return [];
    }

    for(let i=0;i<4;i++){
      if(!(component[i]>=0 && component[i]<256)){
        return [];
      }
    }
    
    return component;
}
