class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="container">
            <div class="row">
                <div class="col">
                    <ul aria-label="Celulares">
                        <li><a style="text-decoration: none;" href="#">Renueva tu celular</a></li>
                        <li><a style="text-decoration: none;" href="#">Celulares con planes portabilidad</a></li>
                        <li><a style="text-decoration: none;" href="#">Celulares pasándote a plan</a></li>
                        <li><a style="text-decoration: none;" href="#">Celulares liberados</a></li>
                        <li><a style="text-decoration: none;" href="#">Accesorios para celulares</a></li>
                    </ul>
                    <ul aria-label="Tecnologia">
                        <li><a style="text-decoration: none;" href="#">Laptops</a></li>
                        <li><a style="text-decoration: none;" href="#">Hogar inteligente</a></li>
                        <li><a style="text-decoration: none;" href="#">Accesorios</a></li>
                        <li><a style="text-decoration: none;" href="#">Televisores</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul aria-label="Sobre Nosotros">
                        <li><a style="text-decoration: none;" href="#">Telefónica Ecuador</a></li>
                        <li><a style="text-decoration: none;" href="#">Telefónica Global</a></li>
                        <li><a style="text-decoration: none;" href="#">Fundación Telefónica</a></li>
                        <li><a style="text-decoration: none;" href="#">Soluciónes para empresas</a></li>
                        <li><a style="text-decoration: none;" href="#">Mapa de cobertura</a></li>
                        <li><a style="text-decoration: none;" href="#">Trabaja con nosotros</a></li>
                        <li><a style="text-decoration: none;" href="#">Accesibilidad</a></li>
                        <li><a style="text-decoration: none;" href="#">Ecorating</a></li>
                        <li><a style="text-decoration: none;" href="#">Dialogando</a></li>
                    </ul>
                    <ul aria-label="Mi Movistar">
                        <li><a style="text-decoration: none;" href="#">Consulta mi factura</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul aria-label="Planes">
                        <li><a style="text-decoration: none;" href="#">Planes Pospago</a></li>
                        <li><a style="text-decoration: none;" href="#">Cámbiate a Movistar</a></li>
                    </ul>
                    <ul aria-label="Prepago">
                        <li><a style="text-decoration: none;" href="#">Combos Prepago</a></li>
                        <li><a style="text-decoration: none;" href="#"> Recargas Online</a></li>
                    </ul>
                    <ul aria-label="Enlaces de interes">
                        <li><a style="text-decoration: none;" href="#">Arcotel</a></li>
                        <li><a style="text-decoration: none;" href="#">Portabilidad</a></li>
                    </ul>
                    <ul aria-label="911">
                        <li><a style="text-decoration: none;" href="#">Usa bien el 911</a></li>
                        <li><a style="text-decoration: none;" href="#">Consulta el estado de tu línea</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul aria-label="Avisos Legales">
                        <li><a style="text-decoration: none;" href="#">Centro de Transparencia</a></li>
                        <li><a style="text-decoration: none;" href="#">Políticas de uso razonable</a></li>
                        <li><a style="text-decoration: none;" href="#">Reglamento de abonados</a></li>
                        <li><a style="text-decoration: none;" href="#">Derechos del consumidor</a></li>
                        <li><a style="text-decoration: none;" href="#">Índices de calidad</a></li>
                        <li><a style="text-decoration: none;" href="#">Calificación OTECEL S.A.</a></li>
                        <li><a style="text-decoration: none;" href="#">Resoluciones Superintendencia de Compañias</a>
                        </li>
                        <li><a style="text-decoration: none;" href="#">Oferta básica de compartición</a></li>
                        <li><a style="text-decoration: none;" href="#">Condiciones Descuento por incentivo de pago</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <p class="col">© 2021 Movistar. Todos los derechos reservados.</p>
                <ul class="header-footer-list col float-right">
                    <li> <a href="#">Politica de Privacidad</a> |</li>
                    <li> <a href="#">Terinos y condiciones</a> |</li>
                    <li> <a href="#">Ventas y devoluciones</a> |</li>
                    <li> <a href="#">Politica de cookies</a> |</li>
                    <li> <a href="#">Mapa de sitio</a> </li>
                </ul>
            </div>
        </div>`;
    }
}


customElements.define('footer-element', Footer);
