//RENDER PRODUCTOS (ARRAY COMPLETO)
const renderProductos = async () => {
  let contenido = `<div class="spinner-border m-auto " role="status">
                        <span class="text-white">Vinoteca</span>
                    </div>`;
  document.getElementById("contenedorProductos").innerHTML = contenido;
  const respuesta = await fetch("./js/productos.json");
  const productos = await respuesta.json();
  setTimeout(() => {
    contenido = "";
    for (const producto of productos) {
      contenido += `
                    <div class="col-6 col-md-4 col-lg-3 d-flex justify-content-center pt-5">
                        <div class="card" style="width: 18rem;">
                            <img src="./assets/img/${producto.img}" onclick="verMas(${producto.id})"
                                class="card-img-top img-fluid animacion" alt="${producto.marca}">
                            <div class="card-body pb-0">
                                <h6 class="card-title" >${producto.marca}</h6>
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
                                <a  class="btn btn-outline-secondary my-4 btn-sm px-3" onclick="verMas(${producto.id})" title="ver más">
                                    Ver Más
                                </a>
                            </div>
                        </div>
                    </div>`;
    }
    document.getElementById("contenedorProductos").innerHTML = contenido;
    let contenedor = document.getElementById("contenedorProductos");
    let titulo = document.createElement("h1");
    titulo.innerText = "Vinoteca";
    titulo.classList = "text-center mt-5 tangerine font50";
    contenedor.prepend(titulo);
  }, 300);
};


//FILTRA POR DENOMINACION
const renderFiltroDenominacion = async (palabraFiltrada, classBody) => {
  const respuesta = await fetch(
    './js/productos.json'
  );
  const array = await respuesta.json();
  let filtrado = array.filter((element) =>
    element.denominacion.includes(palabraFiltrada)
  );
  let claves = {
    palabraFiltrada: palabraFiltrada,
    classBody: classBody,
  };
  guardarSS("claves", claves);
  // guardarSS("claves",claves);
  guardarSS("filtro", filtrado);
  window.location.href = "./render_filtro.html";
};

//FILTRA POR TIPO DE VINO
const renderFiltroTipo = async (palabraFiltrada, classBody) => {
  const respuesta = await fetch(
    './js/productos.json'
  );
  const array = await respuesta.json();
  let filtrado = array.filter((element) =>
    element.tipo.includes(palabraFiltrada)
  );
  claves = {
    palabraFiltrada: palabraFiltrada,
    classBody: classBody,
  };
  guardarSS("claves", claves);
  guardarSS("filtro", filtrado);
  window.location.href = "./render_filtro.html";
};

document.getElementById("tinto").addEventListener("click", () => {
  renderFiltroTipo("Tinto", "1");
});

document.getElementById("blanco").addEventListener("click", () => {
  renderFiltroTipo("Blanco", "2");
});

document.getElementById("espumoso").addEventListener("click", () => {
  renderFiltroTipo("Espumoso", "3");
});

document.getElementById("riberaDelDuero").addEventListener("click", () => {
  renderFiltroDenominacion("Ribera del Duero", "2");
});

document.getElementById("vinoDeEspaña").addEventListener("click", () => {
  renderFiltroDenominacion("Vino de España", "4");
});

document.getElementById("cava").addEventListener("click", () => {
  renderFiltroDenominacion("Cava", "4");
});

document.getElementById("rioja").addEventListener("click", () => {
  renderFiltroDenominacion("Rioja", "5");
});

document.getElementById("riasBaixas").addEventListener("click", () => {
  renderFiltroDenominacion("Rías Baixas", "6");
});
document.getElementById("rueda").addEventListener("click", () => {
  renderFiltroDenominacion("Rueda", "7");
});

//VER MAS // Encuentra productos, guarda SS y redirige hacia descripcion,html donde se renderiza lo guardado e la SS
const verMas = (id) => {
  fetch('./js/productos.json')
    .then((resposne) => resposne.json())
    .then((productos) => {
      let producto = productos.find((element) => element.id == id);
      sessionStorage.setItem("verMas", JSON.stringify(producto));
      window.location.href = "./descripcion.html";
    });
};

actualizarContadorCarrito();
renderProductos();
