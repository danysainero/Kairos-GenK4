
const obj1 = {name1 : 'Logan', name2 : 'Jean'};

function foo(person){
    console.log({...obj1, ...person});    
};

foo({name2 : 'Xavier'});
