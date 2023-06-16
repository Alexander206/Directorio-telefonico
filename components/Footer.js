'use strict';

class Footer extends HTMLElement {
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
    this.innerHTML = `
    <figure class="logo">
        <img src="${this.logo}" alt="imagen del logo" />
        <a href="${this.home}" class="logo-text">Directorio <span>Telefónico</span></a>
    </figure>

    <hr/>

    <div class="nav_center_footer">
        <ul>
            <li class="item_title">
                Sitio web  
            </li>
            
            <li>
                <a href="${this.home}">
                    Inicio
                </a>
            </li>
            
            <li>
                <a href="${this.directorio}">
                    Directorio
                </a>
            </li>
                
            <li>
                <a href="${this.about}">
                    Acerca de
                </a>
            </li>
        </ul>

        <ul>
            <li class="item_title">
                Redes Sociales
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jeisson-alexander/" target="_blank">
                    Linkdin
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/amarokdev/" target="_blank">
                    instagram
                </a>
            </li>
            <li>
                <a href="https://github.com/Alexander206" target="_blank">
                    GitHub
                </a>
            </li>
        </ul>
    </div>

    <secction class="derechos">
      © 2023 Jeisson Gavilán. Todos los derechos reservados.
    </secction>
    `;
  }
}

window.customElements.define('component-footer', Footer);
