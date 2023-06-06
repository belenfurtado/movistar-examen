class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color:white !important;">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown" style="justify-content: center;">
                <img src="./images/movistar-logo.png" style="width: 4%;"></img>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-percent"></i>
                                Celulares
                            </a>
                            <ul class="dropdown-menu">
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-tv"></i>
                                Tecnología
                            </a>
                            <ul class="dropdown-menu">
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Servicios moviles
                            </a>
                            <ul class="dropdown-menu">
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Atención al Cliente
                            </a>
                            <ul class="dropdown-menu">
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" role="button" aria-expanded="false">
                                Blog
                            </a>
                        </li>

                        <button type="button" class="btn btn-outline-primary rounded-pill" style="margin-right: 0.5rem">Mi Movistar</button>
                        <button type="button" class="btn btn-primary rounded-pill" style="margin-right: 0.5rem">
                            <i class="bi bi-cart" style="margin-right: 0.5rem;"></i>Recargas</button>
                        <button type="button" class="btn btn-primary btn-rounded btn-floating dropdown-toggle">
                            <i class="bi bi-person"></i>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
}


customElements.define('header-element', Header);
