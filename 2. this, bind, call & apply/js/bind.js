const person = {
    name: 'Bruce',
    lastname: 'Wayne',
    
    fullname: function() {
      return this.name + ' ' + this.lastname;
    }
  }


  /* SI PONEMOS ESTO DA ERROR PORQUE EL THIS DE PRINT NO LLEGA AL THIS DEL PERSON:

const print = function(greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
}
*/



//SOLUCIÓN: BIND:

const print = function(greet, adj) {
    console.log(greet, this.fullname(), 'you are', adj);
  }.bind(person);