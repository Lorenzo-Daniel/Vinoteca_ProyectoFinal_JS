//RENDER CARRITO
const renderProductosCarrito = () => {
    let productos_carrito = obtenerLS("carrito");
    let contenido = `
                    <div class="mt-3 ">
                        <h1 class="text-center p-5 background_header mt-5 mb-5 rounded-3 text-white">
                            El Carrito esta vacio!
                        </h1>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                        <div class="d-flex">
                            <h2 class=" w-100  text-white my-3 tangerine">
                                Vinos de España
                            </h2>
                        </div>
                        <div class="w-50 d-flex justify-content-center ">
                            <img src="./assets/img/logo-copa-removebg-preview.png" alt="logo">
                        </div>
                    </div>`;
    let total = 0;
    if (productos_carrito.length > 0) {
        contenido = `<div class="bg-dark text-white mt-5 p-5 rounded-3"> <h1 class="text-center">Productos Seleccionados</h1>`;
        for (const producto of productos_carrito) {
            contenido += `
                    <div class="d-flex flex-column flex-md-row  justify-content-md-evenly mt-5"  id="divCarrito${producto.id}" >
                        <img src="./assets/img/${producto.img}" alt="${producto.marca}" class="tamano align-self-start"
                            onclick="magic(${producto.id})">
                        <ul
                            class="d-flex w-100 justify-content-start  justify-content-md-evenly align-items-end flex-wrap list-unstyled m-0 ">
                            <li>
                                <b>Marca:</b> 
                                ${producto.marca}
                            </li>
                            <li>
                                <b>Precio:</b> 
                                ${producto.precio}
                            </li>
                            <li>
                                <b>Tipo: </b>
                                ${producto.tipo}
                            </li>
                            <li>
                                <b>Subtotal: $</b> 
                                ${producto.precio * producto.cantidad}</li>
                            <li>
                                <div class="d-flex align-items-center ms-3">
                                    <button type="button" onclick="eliminarProducto(${producto.id})"
                                        class="btn-mas-menos-red d-flex align-items-center justify-content-center  btn bg-light rounded-0 ">
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                    <hr class="m-0">
                                    <p class=" mx-1 my-0 text-center fs-4">
                                        ${producto.cantidad}
                                    </p>
                                    <button type="button" onclick="agregarAlCarrito(${producto.id})"
                                        class="btn-mas-menos-green d-flex align-items-center justify-content-center btn bg-light rounded-0">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                    <hr class="m-0">
                                </div>
                            </li>
                        </ul>
                        <div class="d-md-flex">
                            <button class="btn bg-danger border-0 w-100 mt-2 " onclick="eliminarProductoTrash(${producto.id})">
                                <i class="fa-solid fa-trash-can  p-0"></i>
                            </button>
                        </div>
                    </div>
                    <hr>`
            total += producto.precio * producto.cantidad
        }
        contenido += `</div>`;
        contenido += `
                    <div class="row col-lg-11 bg-dark text-white m-auto p-5 mt-5 rounded-3">
                        <div class="mb-2">
                            <p>
                                <b>
                                    Precio Final:
                                </b>
                                $${total}
                            </p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center flex-wrap-reverse mt-3">
                            <div class="d-flex justify-content-end mt-2">
                                <button class="btn btn-sm btn-secondary" onclick="validarCodigo()">
                                    Ingresa tu Codigo
                                </button>
                            </div>
                            <div class="d-flex align-items-center  mt-2">
                                <span>Olvide mi</span>
                                <button class=" btn btn-primary rounded-1 btn-sm ms-2" onclick="recordarCodigo()">
                                    codigo
                                </button>
                            </div>
                            <div class="mt-2">
                                <a class="btn btn-success btn-sm " onclick="finalizarCompra()">
                                    Finalizar Compra
                                </a>
                            </div>
                        </div>`;
    }
    document.getElementById("productosEnCarrito").innerHTML = contenido;
    actualizarContadorCarrito();
}

//Elimina productos de a 1 unidad
function eliminarProducto(id) {
    let productos_carrito = obtenerLS("carrito");
    let index = productos_carrito.findIndex(element => element.id == id);
    index > -1 & productos_carrito[index].cantidad--; // -- (-=)

    if (productos_carrito[index].cantidad == 0) {
        productos_carrito.splice(index, 1);
    }
    alertTostyTop("Eliminaste el producto del carrito", "linear-gradient(to right,#240000, #230000)")
    guardarLS("carrito", productos_carrito);
    renderProductosCarrito();
    actualizarContadorCarrito();
}

//Valida el codigo de descuento
const validarCodigo = async () => {
    let codigoGenerado = obtenerLS("codigo");
    console.log(codigoGenerado);
    const {
        value: password
    } = await Swal.fire({
        title: 'Ingresa tu Codigo!',
        input: 'number',
        inputLabel: '',
        inputPlaceholder: 'Ingresa tu Codigo (ctrl+v para pegar )',
        inputAttributes: {
            maxlength: 10,
            autocorrect: 'off',
        }
    });
    if (password == "") {
        Swal.fire('No Ingresaste ningun Codigo')
    } else if (password == codigoGenerado) {
        Swal.fire(`Codigo Correcto! Tienes un 10% de Descuento en tu Compra!`)
        guardarLS("codigoValidado", true);
    } else {
        Swal.fire(`Codigo Incorrecto!`)
    }
}

// Nos da la opcion de recordar y copiar el codigo asignado que se encuentra en un LS
const recordarCodigo = () => {
    let codigoGenerado = obtenerLS("codigo");
    if (codigoGenerado == "") {
        swalAlertTexto("No estas subscrito a nuestro Newsletter")
    } else if (codigoGenerado !== codigoGenerado) {
        swalAlertTexto("El codigo Ingresado no es Correcto!")
    }
    document.getElementById("codigo").innerHTML = codigoGenerado;
    document.getElementById("contCodBtnCopy").classList.remove("visually-hidden");
    let btnCopy = document.getElementById("btnCopy").addEventListener("click", CopiarPortaPapeles)
    setTimeout(() => {
        document.getElementById("contCodBtnCopy").classList.add("visually-hidden");
    }, 8000)
}


//Elimina todos los productos del Carrito
const vaciarCarrito = () => {
    Swal.fire({
        title: 'Estás seguro de vaciar el carro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar el carro',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito");
            renderProductosCarrito();
            actualizarContadorCarrito();

            Swal.fire(
                'Carro eliminado!',
                'Tu carro de compras está vacío',
                'success'
            )
        }
    })
}

//Elimina toos los productos que so iguales sin importar la cantidad
const eliminarProductoTrash = (id) => {
    let obtenerLS = JSON.parse(localStorage.getItem("carrito"));
    let buscar = obtenerLS.findIndex((element) => element.id == id);
    console.log(buscar);
    if (buscar !== -1) {
        obtenerLS.splice(buscar, 1);
        console.log(obtenerLS);
        localStorage.setItem("carrito", JSON.stringify(obtenerLS));
        alertTostyTop("Eliminaste el producto del carrito", "linear-gradient(to right,#240000, #230000)");
    }
    renderProductosCarrito();
}

//Swal. Amplia y trae detallde del vino selleccionado haciendo click en la miniatura
const magic = (id) => {
    let obtener = obtenerLS("carrito");
    let buscar = obtener.find((element) => element.id == id);
    Swal.fire({
        title: buscar.marca,
        html: `
            <ul class= list-unstyled col-6>
                <li class="text-start">
                    Tipo: ${buscar.tipo}
                </li>
                <hr class="m-1">
                <li class="text-start">
                    Denominacion: ${buscar.denominacion}
                </li>
                <hr class="m-1">
                <li class="text-start">
                    Precio: $${buscar.precio}
                </li>
                <hr  class="m-1">
            </ul>`,
        imageUrl: `./assets/img/${buscar.img}`,
        imageWidth: 175,
        imageHeight: 280,
        imageAlt: buscar.marca,
    })
}

//Finaliza al compra
const resumenDeCompra = () => {
    let registro = obtenerLS("datosDeUsuario")
    localStorage.removeItem("carrito")
    let mensaje = `
                <div class="mt-3 ">
                    <h1 class="text-center p-5 background_header mt-5 mb-5 rounded-3 text-white">
                        ¡Muchas Gracias por tu compra ${registro.nombre.toUpperCase()}!
                    </h1>
                </div>
                <div class="d-flex flex-column align-items-center d-md-row">
                    <div class="d-flex  align-items-end justify-content-start">
                        <h2 class=" w-100 text-center text-white col-4 mb-3 tangerine mt-3 p-3 rounded-2">
                            Vinos de España
                        </h2>
                    </div>
                    <div class= "w-50 d-flex justify-content-center">
                        <img src="./assets/img/logo-copa-removebg-preview.png" class="" alt="">
                    </div>
                </div>
                `
    document.getElementById("productosEnCarrito").innerHTML = mensaje;
}

const finalizarCompra = () => {
    const datos = obtenerLS("datosDeUsuario");
    datos.length == 0 ? swalAlertTexto("Para Finalizar la Compra debes estar Registrado") : resumenDeCompra();
    actualizarContadorCarrito()
}

renderProductosCarrito()