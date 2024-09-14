let ultimoTamanoPar = 16;
const tamanoMaximo = 500;

const inputNumeros = document.getElementById('input-numeros');
const contenedorNumeros = document.getElementById('contenedor-numeros');

const agregarNumeros = () => {
    const cadenaNumeros = inputNumeros.value;

    if (cadenaNumeros && !isNaN(cadenaNumeros)) {
        Array.from(cadenaNumeros).forEach(numero => mostrarNumero(numero));
        inputNumeros.value = '';
    }
};

const mostrarNumero = numero => {
    const span = document.createElement('span');
    span.textContent = numero;
    span.classList.add('numero');

    if (parseInt(numero) % 2 === 0) {
        ultimoTamanoPar = Math.min(ultimoTamanoPar * 2, tamanoMaximo);
        span.style.fontSize = `${ultimoTamanoPar}px`;
        span.classList.add('par');
    } else {
        span.classList.add('impar');
        span.style.fontSize = '1rem';
    }

    contenedorNumeros.appendChild(span);
};

document.getElementById('agregar-btn').addEventListener('click', agregarNumeros);
inputNumeros.addEventListener('keypress', e => e.key === 'Enter' && agregarNumeros());
