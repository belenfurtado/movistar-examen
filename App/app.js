const _marcas =
    [
        {
            Marca: "IPhone",
            Modelo: "IPhone 14",
            Descripcion: "Grande y extragrande",
            Icono: "",
            ImagenBackground: "./images/iphone.png",
            Nuevo: true
        }
        ,
        {
            Marca: "Samsung",
            Modelo: "Samsung",
            Descripcion: "Galaxy Z Flip 4",
            Icono: "",
            ImagenBackground: "./images/samsung.png",
            Nuevo: false
        }
        ,
        {
            Marca: "Motorola",
            Modelo: "Motorola Edge 30 Fusion",
            Descripcion: "Increible diseño sin bordes",
            Icono: "",
            ImagenBackground: "./images/motorola.png",
            Nuevo: true
        },
        {
            Marca: "Xiaomi",
            Modelo: "Xiaomi",
            Descripcion: "Encuéntralo en Movistar",
            Icono: "",
            ImagenBackground: "./images/xiaomi.png",
            Nuevo: false
        }
    ];

const _carousel = [
    {
        Imagen: "./images/carousel-foto.png",
        Descuento: "25%",
        Modelo: "IPhone 12 Pro Max",
        Cuotas: "12",
        PrecioCuota: "116",
        PrecioTotal: "1392",
        PrecioAnterior: "1692"
    },
    {
        Imagen: "./images/carousel-foto.png",
        Descuento: "25%",
        Modelo: "IPhone 12 Pro Max",
        Cuotas: "12",
        PrecioCuota: "116",
        PrecioTotal: "1392",
        PrecioAnterior: "1692"
    },
    {
        Imagen: "./images/carousel-foto.png",
        Descuento: "25%",
        Modelo: "IPhone 12 Pro Max",
        Cuotas: "12",
        PrecioCuota: "116",
        PrecioTotal: "1392",
        PrecioAnterior: "1692"
    },
    {
        Imagen: "./images/carousel-foto.png",
        Descuento: "25%",
        Modelo: "IPhone 12 Pro Max",
        Cuotas: "12",
        PrecioCuota: "116",
        PrecioTotal: "1392",
        PrecioAnterior: "1692"
    }
];

function load_telefonos() {

    _marcas.forEach(element => {
        let div_card = document.createElement("div");
        div_card.className = "card col-5";
        div_card.style = "margin-bottom: 2rem; margin-inline:auto;";
        div_card.innerHTML =
            "<div class=\"card-body row\">" +
            "<div class=\"col\">" +
            "<spam>" + "nuevo" + "</spam >" +
            "<h5 class=\"card-title\">" + element.Modelo + "</h5>" +
            "<h6 class=\"card-subtitle mb-2 text-body-secondary\">" + element.Descripcion + "</h6>" +
            "<i> </i>" +
            "<a href=\"#\" class=\"card-link\">" + "Ver todo" + element.Marca + "</a>" +
            "</div>" +
            "<div class=\"col\">" +
            "<img src=\" " + element.ImagenBackground + "\">" +
            "</div>" +
            "</div >";

        document.getElementById('preview').appendChild(div_card);
    });
}

function load_Carousel() {
    let index = 0;
    _carousel.forEach(element => {
        let carouselItem = document.createElement("div");
        carouselItem.className = "carousel-item active col";

        if (index == 0) {
            carouselItem.innerHTML =
                "<div class=\"card-carousel  d-block\" >" +
                "<img" + " src=\"" + element.Imagen + "\"class=\"card-img-top\">" +
                "<div class=\"card-body card-body-carousel\">" +
                "<h5 class=\"card-text\">" + element.Modelo + "</h5>" +
                "<h6>Hasta en" + element.Cuotas + "cuotas de</h6>" +
                "<h4> $" + element.PrecioCuota + "</h4>" +
                "<spam> PrecioTotal: </spam>" +
                "<h6> $" + element.PrecioTotal + "  <small> <s>" + element.PrecioAnterior + "</s> </small>" + "</h6>" +
                "</div>" +
                "</div>"
        } else {
            carouselItem.className = "carousel-item col";
            carouselItem.innerHTML =
                "<div class=\"card-carousel  d-block\">" +
                "<img" + " src=\"" + element.Imagen + "\"class=\"card-img-top\">" +
                "<div class=\"card-body card-body-carousel\">" +
                "<h5 class=\"card-text\">" + element.Modelo + "</h5>" +
                "<h6>Hasta en" + element.Cuotas + "cuotas de</h6>" +
                "<h4> $" + element.PrecioCuota + "</h4>" +
                "<spam> PrecioTotal: </spam>" +
                "<h6> $" + element.PrecioTotal + "  <small> <s>" + element.PrecioAnterior + "</s> </small>" + "</h6>" +
                "</div>" +
                "</div>"
        }

        index++;
        document.getElementById('carousel-inner').appendChild(carouselItem);
    })
}
load_telefonos();
load_Carousel();
