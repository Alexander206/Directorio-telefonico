'use strict';

const url = 'https://jsonplaceholder.typicode.com/users';
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let $datos = document.getElementById('datos');

if (localStorage.length) {
  let dataLocal = JSON.parse(localStorage.getItem('users'));
  let saludo = `Hola ${dataLocal[id].name}`;
  let pagina = '';

  fetch(url)
    .then((res) => res.json())
    .then((respuesta) => {
      console.log(respuesta);
      let data = respuesta
        .map((item) => {
          return `
          <ul class="tarjet">
            <li> <span>Nombre:</span> ${item.name} </li>
            <li> <span>Usuario:</span> ${item.username} </li>
            <li> <span>Compañia:</span> ${item.company.name} </li>
            <li> <span>Correo:</span> ${item.email} </li>
            <li> <span>Telefono:</span> ${item.phone} </li>
            <li> <span>Sitio web:</span> ${item.website} </li>
            <li> <span>Ciudad:</span> ${item.address.city} </li>
          </ul>`;
        })
        .join('');

      pagina = `
        <h1 class="Titulo"> ${saludo} </h1>
        <a href="../index.html" class="button">
          Cerrar sesion
          <ion-icon name="log-out-outline"></ion-icon>
        </a>
        <article class="container">
          ${data}
        </article>`;

      $datos.innerHTML = pagina;
    });
} else {
  console.log('Actualemnte no hay usuarios registrados');
}
