export function mostrarAlerta(mensaje) {
  const alerta = document.querySelector('.alerta__error');
  if (!alerta) {
    const divALerta = document.createElement('div');
    divALerta.classList.add('alerta', 'alerta__error');

    divALerta.textContent = mensaje;
    const formulario = document.querySelector('#formulario');
    formulario.appendChild(divALerta);
    setTimeout(() => {
      divALerta.remove();
    }, 3000);
  }
}

export function validar(obj) {
  return !Object.values(obj).every((input) => input !== '');
}
