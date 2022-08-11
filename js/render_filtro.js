let filtrado = obtenerSS("filtro");
let claves  = obtenerSS("claves")

//render Filtro
const renderFiltro = () => {
    let contenido = `<div class="spinner-border m-auto" role="status">
                        <span class="text-white">${claves.palabraFiltrada}</span>
                    </div>`
    document.getElementById("contenedorProductos").innerHTML = contenido;
    setTimeout(() => {
        contenido = "";
        document.getElementById("body").className = `body-${claves.classBody}`
        for (const producto of filtrado) {
            contenido += `
                        <div class="col-6 col-md-4 col-lg-3 d-flex justify-content-center pt-5">
                            <div class="card" style="width: 18rem;">
                                <img src="./assets/img/${producto.img}" onclick="verMas(${producto.id})"
                                    class="card-img-top img-fluid animacion" alt="${producto.marca}">
                                <div class="card-body pb-0">
                                    <h5 class="card-title" >${producto.marca}</h5>
                                    <hr>
                                </div>
                                <ul class="d-none d-md-flex list-group list-group-flush ">
                                    <li class="list-group-item ">D.O: ${producto.denominacion}</li>
                                    <li class="list-group-item ">Precio: $${producto.precio} </li>
                                </ul>
                                <div class="d-flex justify-content-evenly">
                                    <button class="btn btn-outline-primary my-4 btn-sm px-3 " onclick="agregarAlCarrito(${producto.id})">
                                        Agregar
                                    </button>
                                    <a class="btn btn-outline-secondary my-4 btn-sm px-3" onclick=" verMasFiltro(${producto.id})" title="ver más">
                                        Ver Más
                                    </a>
                                </div>
                            </div>
                        </div>`
        }
        document.getElementById("contenedorProductos").innerHTML = contenido;
        let contenedor = document.getElementById("contenedorProductos")
        let titulo = document.createElement("h1");
        titulo.innerText = `Vinoteca - ${claves.palabraFiltrada}`;
        titulo.classList = "text-center mt-5 tangerine font50 "
        contenedor.prepend(titulo)
    }, 300);
    document.getElementById("titleFiltro").innerHTML =`${claves.palabraFiltrada} || Vinos de España`
}

const verMasFiltro = (id) => {
   let filtro = obtenerSS("filtro")
                let producto = filtro.find((element) => element.id == id);
                sessionStorage.setItem("verMas", JSON.stringify(producto));
                window.location.href = "./descripcion.html"
}

renderFiltro()
actualizarContadorCarrito()

