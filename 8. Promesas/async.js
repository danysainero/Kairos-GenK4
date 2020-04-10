function load() {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", getCharactersWithAsync, false);

  async function getCharactersWithAsync() {
    
    document.querySelector(".spinner-container").classList.remove("hide");
 
    const res = await fetch(`http://hp-api.herokuapp.com/api/characters`);
    const characters = await res.json();
   
    if (characters) {
      printCharacters(characters);
      setTimeout(function(){  document.querySelector(".spinner-container").classList.add("hide");
    }, 3000);     
    }
  }

  function printCharacters(characters) {
    for (let item of characters) {
      var newP = document.createElement("p");
      newP.classList.add("characters");
      var pText = document.createTextNode(
        `${item.name} ==> ${item.gender} ==> ${item.house}`
      );
      newP.appendChild(pText);
      var contentSection = document.querySelector(".characters-container");
      document.body.insertBefore(newP, contentSection);
    }
  }
}

document.addEventListener("DOMContentLoaded", load, false);
