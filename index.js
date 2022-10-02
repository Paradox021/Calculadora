
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.Numero');
const botonesOperadores = document.querySelectorAll('.Operador');
const body = document.getElementById('body');
const display = new Display(displayValorAnterior, displayValorActual);
const operadores = {'+':'sumar','/':'dividir','-':'restar','x':'multiplicar', '*':'multiplicar','Enter':'igual', '=':'igual'};
const op = ['+','/','-','x','*', 'Enter', '='];

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})


function agregar(event){
    if(event.key ==='Backspace')
        display.borrar()
    
    if(event.key ==='Delete')
        display.borrarTodo()
    
    if(op.indexOf(event.key)!==-1)
        display.computar((operadores[event.key]))
    
    if(!isNaN(event.key)|| event.key==='.')
        display.agregarNumero(event.key)
  }

body.addEventListener('keydown', agregar)