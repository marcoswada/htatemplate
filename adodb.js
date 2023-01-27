function jsDBECreateDB() {
    s="<form action='#' method='POST'>"+
    "<label for='txtFile'>"+
    "<input value='htatemplate-js.mdb' type='text' class='' name='txtFile' id='txtFile'>"+
    "</label>"+
    "<button onClick='jsDBECreateDB_create_click()'>Create</button>"+
    "</form>"
    document.querySelector("#divDisplay").innerHTML=s;
}
