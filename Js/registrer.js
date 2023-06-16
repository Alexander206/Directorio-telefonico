'use strict';

window.addEventListener('load', () => {
  // Tomo del id el form Registor
  let $formRegistro = document.getElementById('form_registro');

  // Escucho el evento Submit
  $formRegistro.addEventListener('submit', (event) => {
    event.preventDefault();

    // Guardo los datos entrantes del formulario en un objeto
    const data = {
      name: $formRegistro.name.value,
      email: $formRegistro.email.value,
      password: $formRegistro.password.value,
    };

    // Si ya existen fatos en el LocalStornage los guardo dentro del array de objetos
    if (localStorage.length) {
      let dataLocal = JSON.parse(localStorage.getItem('users'));
      // Verifico si ya existe el usuario registrado
      let existe = dataLocal.find((user) => user.email === $formRegistro.email.value) ? true : false;

      if (!existe) {
        localStorage.setItem('users', JSON.stringify([...dataLocal, data]));
        alert('¡Registro Exitoso!');
        location.href = `../pages/login.html`;
      } else {
        alert('El usuario ya existe');
      }
    } else {
      localStorage.setItem('users', JSON.stringify([data]));
    }
  });
});
