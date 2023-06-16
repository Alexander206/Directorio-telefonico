'use strict';

window.addEventListener('load', () => {
  let $formLogin = document.getElementById('form_login');

  $formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    if (localStorage.length) {
      let dataLocal = JSON.parse(localStorage.getItem('users'));

      let existe = dataLocal.find((user) => {
        return user.email === $formLogin.email.value && user.password === $formLogin.password.value;
      })
        ? true
        : false;

      let index = dataLocal.findIndex(
        (user) => user.email === $formLogin.email.value && user.password === $formLogin.password.value,
      );

      if (existe) {
        alert('Ingreso correcto');
        location.href = `../pages/directorio.html?id=${index}`;
      } else {
        alert('Datos incorrectos');
      }
    } else {
      console.log('Actualemnte no hay usuarios registrados');
    }
  });

  console.log(JSON.parse(localStorage.getItem('users')));
});
