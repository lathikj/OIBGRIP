let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit");

 
function celToFar(){
    let output = ( parseFloat(celsius.value) *1.8) + 32;
    fahrenheit.value = parseFloat( output.toFixed(2));
}

function farToCel(){
    let output = ( parseFloat(fahrenheit.value)-32)/1.8;
    celsius.value = parseFloat( output.toFixed(2));
}
