const cajas = document.querySelectorAll('.caja');
let cajaSeleccionada = 0;

function moveCajas(direction) {
    cajas[cajaSeleccionada].classList.remove('seleccionada');
    cajaSeleccionada = (cajaSeleccionada + direction + cajas.length) % cajas.length;
    cajas[cajaSeleccionada].classList.add('seleccionada');
}