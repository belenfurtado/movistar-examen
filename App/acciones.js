class Acciones extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h3 class="linea-movistar-title">¿Qué deseas hacer?</h3>

    <div class="row row-cols-1 row-cols-md-3 g-4 row-acciones">
        <div class="col acciones-col">
            <div class="card mb-3 acciones-card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <i class="bi bi-phone"></i>
                            <p class="card-text">Hacer una recarga</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col acciones-col">
            <div class="card mb-3 acciones-card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <i class="bi bi-phone"></i>
                            <p class="card-text">Seguir mi orden</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col acciones-col">
            <div class="card mb-3 acciones-card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <i class="bi bi-phone"></i>
                            <p class="card-text">Consultar mi saldo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col acciones-col">
            <div class="card mb-3 acciones-card" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <i class="bi bi-phone"></i>
                            <p class="card-text">Cámbiate a Movistar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
}


customElements.define('acciones-element', Acciones);
