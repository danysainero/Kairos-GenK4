const obj = {param1 : 11, param2 : 22, param3 : 33};

const {param1, param2, param3} = obj;

function params({param1 = 10, param2 = 20, param3 = 30} = {}){
    console.log(param1, param2 ,param3);    
}

params();
params({param2, param1});
