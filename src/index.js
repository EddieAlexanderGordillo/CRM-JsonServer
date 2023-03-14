import { obtenerClientes, eliminarCliente } from './API.js';

(function () {
  const listado = document.querySelector('#listado-clientes');
  listado.addEventListener('click', confirmarEliminar);
  document.addEventListener('DOMContentLoaded', mostrarClientes);
  async function mostrarClientes() {
    const clientes = await obtenerClientes();
    clientes.forEach((cliente) => {
      const { nombre, email, telefono, empresa, id } = cliente;
      const row = document.createElement('tr');
      row.innerHTML += `
            <td class="celda">
                <p class="celda__nombre"> ${nombre} </p>
                <p class="celda__correo"> ${email} </p>
            </td>
            <td class="celda">
                <p class="celda__telefono">${telefono}</p>
            </td>
            <td class="celda">    
                <p class="celda__empresa">${empresa}</p>
            </td>
            <td class="celda">
                <a href="editar-cliente.html?id=${id}" class="editar">Editar</a>
                <a href="#" data-cliente="${id}" class="eliminar">Eliminar</a>
            </td>
            `;
      listado.appendChild(row);
    });
  }
  async function confirmarEliminar(e) {
    if (e.target.classList.contains('eliminar')) {
      const clienteId = parseInt(e.target.dataset.cliente);
      const confirmar = confirm('Deseas eliminar este registro?');
      if (confirmar) {
        await eliminarCliente(clienteId);
      }
    }
  }
})();
