function listPokemon() {
    var data = "{}";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            document.querySelector("#divDisplay").innerHTML=this.responseText;
            //console.log(this.responseText);
        }
    });
    
    xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");
    
    xhr.send(data);
}