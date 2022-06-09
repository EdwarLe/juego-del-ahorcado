
const imagen = crearId('baseAho');
const perdiste = crearId('perdiste');
const resultado = crearId('resultado');
const btn = crearId('jugar');


function crearId(str){
    return document.getElementById(str);
}




function rng(numMin, numMax){
    const valorEscogido = numMax - numMin;
    const valorAleatorio = Math.floor(Math.random() * valorEscogido) + numMin;
    return valorAleatorio;
}