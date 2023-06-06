class Blog extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h3 class="linea-movistar-title">Blog Movistar ¿Qué está pasando?</h3>

    <div class="row row-cols-1 row-cols-md-3 g-4 row-blog">
        <div class="col">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="./images/blog-card-1.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Título contenido</h5>
                            <p class="card-text">Conoce más acerca de la política de privacidad de Movistar y de
                                protección de datos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="./images/blog-card-2.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Título contenido</h5>
                            <p class="card-text">Conoce más acerca de la política de privacidad de Movistar y de
                                protección de datos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="./images/blog-card-3.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Título contenido</h5>
                            <p class="card-text">Conoce más acerca de la política de privacidad de Movistar y de
                                protección de datos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" class="card-link blog-link">Ver todo el blog</a>
    </div>`;
    }
}


customElements.define('blog-element', Blog);
