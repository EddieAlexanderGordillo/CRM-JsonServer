import { mostrarAlerta, validar } from './funciones.js';
import { nuevoCliente } from './API.js';
(function () {
  const formulario = document.querySelector('#formulario');
  formulario.addEventListener('submit', validarCiente);

  async function validarCiente(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };
    if (validar(cliente)) {
      // mostrar mensaje
      mostrarAlerta('Todos los campos son obligatorios');
      return;
    }
    await nuevoCliente(cliente);
    window.location.href = '../public/index.html';
  }
})();
