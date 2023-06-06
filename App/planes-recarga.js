class PlanesRecarga extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="container" id="container-planes-recargas">
        <div class="row">
            <div class="col planes">
                <div class="planes-recarga-text">
                    <spam>PLANES</spam>
                    <h5>Movistar tiene plan para ti</h5>
                    <a href="#" style="color: white;">Conoce más</a>
                </div>
                <img class="planes-recargas-img" src="./images/planes.png">
            </div>
            <div class="col recarga">
                <div class="planes-recarga-text">
                    <spam>PREPAGO ROLLOVER</spam>
                    <h5>Recarga $150 y disfruta más beneficios</h5>
                    <a href="#" style="color: white;">Descúbrelos</a>
                </div>
                <img class="planes-recargas-img" src="./images/recarga-foto.png">
            </div>
        </div>
    </div>`;
    }
}


customElements.define('planes-recarga-element', PlanesRecarga);
