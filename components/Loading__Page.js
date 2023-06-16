class loadingPage extends HTMLElement {
  connectedCallback() {
    window.addEventListener('load', () => {
      document.querySelector('.Loading__Page').id = 'pagina__cargada';
      let element = document.getElementById('pagina__cargada');
      element.addEventListener('animationend', () => {
        element.className = 'Loading__Page off';
      });
    });

    this.innerHTML = `
        <div class="Loading__Page" id=""></div>`;
  }
}

window.customElements.define('loading-page', loadingPage);
