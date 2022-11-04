const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

var flecha = document.getElementById("flecha").addEventListener('click', flech);
var lateral = document.querySelectorAll(".lateral");
var clic=1;

function flech(){
    if(clic==1){
    document.getElementById("lateral").style.opacity="1";
    clic=clic +1;
    }
else{
    document.getElementById("lateral").style.opacity="0";
    clic=1;
  }
}
