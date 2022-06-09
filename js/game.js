let palabraEscogida;
let errores = 0;
let aciertos = 0;

const btnLetras = document.querySelectorAll("#letras button");

btn.onclick = empezar;

// Función para iniciar el juego

    function empezar(event){
        imagen.src = 'imagenes/baseAho.png';
        perdiste.src = '';
        resultado.innerHTML = '';
        btn.style.visibility = "hidden";
            
        errores = 0;
        aciertos = 0;
        
        const parrafo = crearId('palabra-adivinar');
        parrafo.innerHTML = '';
        const cantPalabras = palabras.length;
        const valorBajo = 0;
        const valorAleatorio = rng(valorBajo, cantPalabras);
        
        palabraEscogida = palabras[valorAleatorio];
        const cantLetras = palabraEscogida.length;
        
        for(let i = 0; i < btnLetras.length; i++){
            btnLetras[i].disabled = false;
            btnLetras[i].style.visibility = "visible";
        }
        
        for( let i = 0; i < cantLetras; i++){
            const span = document.createElement('span');
            parrafo.appendChild(span);
        }  
    }





for(let i = 0; i < btnLetras.length; i++){
    btnLetras[i].addEventListener('click', clickLetras);
}



// Función para identificar el click en cada letra

function clickLetras(event){
    const letras = document.querySelectorAll('#palabra-adivinar span');
    const boton = event.target;
    boton.style.visibility = "hidden";
    
    const letra = boton.innerHTML.toUpperCase();
    const palabra = palabraEscogida.toUpperCase();

    let letraCorrecta = false;
    for(let i = 0; i < palabra.length; i++){
        if(letra == palabra[i]){
            letras[i].innerHTML = letra;
            aciertos++
           letraCorrecta = true; 
        }
    }
    if(letraCorrecta == false){
        errores++;
        const imgs = `imagenes/aho${errores}.png`;
        imagen.src = imgs;
    }

    if(errores == 8){
        resultado.innerHTML = "Lo siento la palabra era " + palabraEscogida;
        imagen.src = 'imagenes/perdiste.png';
        juegoTerminado();
    }else if(aciertos == palabraEscogida.length){
        imagen.src = 'imagenes/ganaste.png';
        resultado.innerHTML = "Genial eres un PROOO!!!";
        juegoTerminado();
    }
    
}



// Función para resetear el juego

function juegoTerminado(){
    for(let i = 0; i < btnLetras.length; i++){
        btnLetras[i].style.visibility = "hidden";
    }
    btn.style.visibility = "visible";
}


juegoTerminado();

