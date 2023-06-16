'use strict';

class Header extends HTMLElement {
  constructor() {
    super();
    this.logo;
    this.home;
    this.directorio;
    this.about;
    this.login;
    this.registrer;
  }

  static get observedAttributes() {
    return ['logo', 'home', 'directorio', 'about', 'login', 'registrer'];
  }

  attributeChangedCallback(nameAttr, oldValue, newValue) {
    switch (nameAttr) {
      case 'logo':
        this.logo = newValue;
        break;
      case 'home':
        this.home = newValue;
        break;
      case 'directorio':
        this.directorio = newValue;
        break;
      case 'about':
        this.about = newValue;
        break;
      case 'login':
        this.login = newValue;
        break;
      case 'registrer':
        this.registrer = newValue;
        break;
    }
  }

  connectedCallback() {
    let estadoHeader = false;
    /* Logica del header */
    window.addEventListener('load', () => {
      let $btnMenu = document.getElementById('btn_menu');
      let $menu = document.getElementById('menu');
      let $listBtn = document.getElementById('list_btn');

      $btnMenu.addEventListener('click', () => {
        estadoHeader = !estadoHeader;
        if (estadoHeader) {
          $menu.className = 'nav_center';
          $listBtn.className = 'nav_lista lista_botones';
        } else {
          $menu.className = 'nav_center cerrado';
          $listBtn.className = 'nav_lista lista_botones cerrado';
        }
      });
    });

    this.innerHTML = `
      <figure class="logo">
          <img src="${this.logo}" alt="imagen del logo" />
          <a href="${this.home}" class="logo-text">Directorio <span>Telefónico</span></a>
      </figure>

      <nav class="nav_center cerrado" id="menu">
          <ul class="nav_lista">
          <li class="nav_option">
              <a href="${this.home}"> Inicio </a>
          </li>
          <li class="nav_option">
              <a href="${this.directorio}"> Direcotiro </a>
          </li>
          <li class="nav_option">
              <a href="${this.about}"> Acerca de </a>
          </li>
          </ul>
      </nav>

      <ul class="nav_lista lista_botones cerrado" id="list_btn">
        <li class="nav_item">
            <a href="${this.registrer}" class="button button_blue"> Crear Cuenta </a>
        </li>
        <li class="nav_item">
            <a href="${this.login}" class="button button_simple"> Iniciar Sesión </a>
        </li>
      </ul>

      <button class="logo button btn_header" id="btn_menu">
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    `;
  }
}

window.customElements.define('component-header', Header);
