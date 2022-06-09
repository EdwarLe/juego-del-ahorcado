var palabraIngresada = document.getElementById('inputPalabraIngresada').value.toUpperCase();
var btnIngresarPalabra = document.getElementById('btnIngresarPalabra');


//btnIngresarPalabra.addEventListener('click', function ingresarPalabra (){
   
  //  window.open("index.html");

//});

function palabraIn () {
    const cantLetras = palabraIngresada.length;   

    //window.open("index.html");
    console.log(palabraIngresada);
}

btnIngresarPalabra.onclick = palabraIn;
