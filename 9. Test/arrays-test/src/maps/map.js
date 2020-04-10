 /********************************************************************/
//convertir el array de numeros en un array de strings

 export function stringItUp(arr){
    return arr.map(item => item.toString())
  }
  
  //console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


 /********************************************************************/
//convertir la primera letra de cada string en mayuscula

export   function capitalizeNames(arr){
    return arr.map( name => name[0].toUpperCase() + name.toLowerCase().slice(1) );
  }
  
//  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
