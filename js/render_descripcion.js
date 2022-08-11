//
const renderDescripcion = () => {
    let producto = JSON.parse(sessionStorage.getItem("verMas"));
    contenido = `
        <h1 class= "text-center border mt-5 bg-dark text-white py-3">${producto.marca}</h1>
                    <div class="d-flex justify-content-evenly align-items-center flex-wrap">
                        <div class=" pt-5">
                            <div class="card" style="width: 18rem;">
                                <img src="./assets/img/${producto.img}" class="animacion1 rounded-3" alt="${producto.marca}">
                            </div>
                        </div>
                        <div class="col-md-8 p-3 p-md-5 border rounded-2 mt-5 bg-dark text-white">
                            <h3>
                                Descripción:
                            </h3>
                            <p class="mb-5">
                                ${producto.descripcion}
                            </p>
                            <div class="d-flex justify-content-between">
                                <div class="col-6">
                                    <ul class="list-unstyled">
                                        <li>
                                            <b> Marca:</b> ${producto.marca}
                                        </li>
                                        <li>
                                            <b>Bodega:</b> ${producto.bodega}
                                        </li>
                                        <li>
                                            <b>Denominación:</b> ${producto.denominacion}
                                        </li>
                                        <li>
                                            <b>Tipo:</b> ${producto.tipo}
                                        </li>
                                        <li>
                                            <b>Añada:</b> ${producto.añada}
                                        </li>
                                        <li>
                                            <b> Grado: </b> ${producto.grado}
                                        </li>
                                        <li>
                                            <b>Variedad:</b> ${producto.variedad}
                                        </li>
                                        <li>
                                            <b>Precio: $${producto.precio}</b>
                                        </li>
                                        <li>
                                            <div class="accordion mt-2" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">
                                                            Maridaje
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                                                        data-bs-parent="#accordionExample">
                                                        <div class="accordion-body d-flex p-3 justify-content-evenly align-items-center back_img_maridaje">
                                                            <p class="m-0 p-3  bg-darky ">
                                                                ${producto.maridaje}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a class="btn btn-warning" onclick="volver()"><i class="fa-solid fa-arrow-left-long"></i><br>Volver</a>
                                </div>
                                <div class="col-6 d-flex flex-column align-items-center justify-content-center">
                                    <h5 class="text-center">
                                    ${producto.marca} | Cosecha: ${producto.añada}
                                    </h5>
                                    <p>
                                        Precio : $${producto.precio}
                                    </p>
                                    <button href="" class="btn btn-primary mt-2" onclick="agregarAlCarrito(${producto.id}) ">
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <span class="my-5 py-1 bg-dark">`;
    document.getElementById("descripcion").innerHTML = contenido;
    actualizarContadorCarrito();
    document.getElementById("title").innerHTML = `${producto.marca} || Vinos de España`
}

//Vuelve al ultimo html en el historial
const volver = () =>  window.history.back();
renderDescripcion()
actualizarContadorCarrito()


