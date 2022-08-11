//GUARDAR SESSION STORAGE
function guardarSS(SS, parametro) {
    sessionStorage.setItem(SS, JSON.stringify(parametro))
}

//OBTENER SESSION STORAGE
function obtenerSS(SS) {
    return JSON.parse(sessionStorage.getItem(SS))

}
//GUARDAR LOCAL STORAGE
function guardarLS(LS, parametro) {
    localStorage.setItem(LS, JSON.stringify(parametro));
}

//OBTENER LOCAL STORAGE
function obtenerLS(LS) {
    return JSON.parse(localStorage.getItem(LS)) || [];
}

//Actualiza contador carrito
const actualizarContadorCarrito = () => {
    let productos = obtenerLS("carrito");
    let contador = productos.length;
    document.getElementById("contadorCarrito").innerText = contador;
}

//Agrega producto al Carrito
const agregarAlCarrito = (id) => {
    let productos_carrito = obtenerLS("carrito")
    let indice = productos_carrito.findIndex(element => element.id == id);
    if (indice > -1) {
        productos_carrito[indice].cantidad++; //++ (+=)
        guardarLS("carrito", productos_carrito);
        console.log(productos_carrito);
        actualizarContadorCarrito();
        alertTostyTop("Agregaste un producto al carrito", "linear-gradient(to right, #00b09b, #96c93d)")
        renderProductosCarrito();
    } else {
        fetch('https://api.jsonbin.io/v3/b/62e938f11c7f436f211c720a')
            .then((resposne) => resposne.json())
            .then((productos) => {
                let producto = productos.record.find((element) => element.id == id)
                productos_carrito.push(producto)
                console.log(productos_carrito);
                guardarLS("carrito", productos_carrito)
                alertTostyTop("Agregaste un producto al carrito", "linear-gradient(to right, #00b09b, #96c93d)")
                actualizarContadorCarrito();
            });
    }
}


// //FILTRA POR DENOMINACION
// const renderFiltroDenominacion = async (palabraFiltrada, classBody) => {
//     const respuesta = await fetch('https://api.jsonbin.io/v3/b/62e938f11c7f436f211c720a');
//     const array = await respuesta.json();
//     let filtrado = array.record.filter((element) => element.denominacion.includes(palabraFiltrada));
//     let claves = {
//         palabraFiltrada: palabraFiltrada,
//         classBody: classBody
//     }
//     guardarSS("claves", claves)
//     // guardarSS("claves",claves);
//     guardarSS("filtro", filtrado);
//     window.location.href = "./render_filtro.html"
// }

// //FILTRA POR TIPO DE VINO
// const renderFiltroTipo = async (palabraFiltrada, classBody) => {
//     const respuesta = await fetch('https://api.jsonbin.io/v3/b/62e938f11c7f436f211c720a');
//     const array = await respuesta.json();
//     let filtrado = array.record.filter((element) => element.tipo.includes(palabraFiltrada));
//     claves = {
//         palabraFiltrada: palabraFiltrada,
//         classBody: classBody
//     }
//     guardarSS("claves", claves)
//     guardarSS("filtro", filtrado);
//     window.location.href = "./render_filtro.html"
// }

// document.getElementById("tinto").addEventListener("click", () => {
//     renderFiltroTipo("Tinto", "1")
// });

// document.getElementById("blanco").addEventListener("click", () => {
//     renderFiltroTipo("Blanco", "2")
// });

// document.getElementById("espumoso").addEventListener("click", () => {
//     renderFiltroTipo("Espumoso", "3")
// });

// document.getElementById("vinoDeEspaña").addEventListener("click", () => {
//     renderFiltroDenominacion("Vino de España", "4")

// });

// document.getElementById("rioja").addEventListener("click", () => {
//     renderFiltroDenominacion("Rioja", "5")
// });

// document.getElementById("riasBaixas").addEventListener("click", () => {
//     renderFiltroDenominacion("Rías Baixas", "6")
// });
// document.getElementById("rueda").addEventListener("click", () => {
//     renderFiltroDenominacion("Rueda", "7")
// });

// //VER MAS 
// const verMas = (id) => {
//     fetch('https://api.jsonbin.io/v3/b/62e938f11c7f436f211c720a')
//         .then(
//             (resposne) => resposne.json())
//         .then(
//             (productos) => {
//                 let producto = productos.record.find((element) => element.id == id);
//                 sessionStorage.setItem("verMas", JSON.stringify(producto));
//                 window.location.href = "./descripcion.html"
//             });
// }

//VALIDACION LOGIN
// const login = () => {
//     document.getElementById("loginForm").addEventListener("submit", (e) => {
//         e.preventDefault();
//         document.getElementById("loguearse").addEventListener("click", () => {
//             const datos = obtenerLS("datosDeUsuario")
//             let login_e_mail = document.getElementById("loginE_mail").value;
//             let login_password = document.getElementById("loginPassword").value;
//             console.log(datos[0].nombre);
//             if (login_e_mail == "") {
//                 swalAlertTexto("El Campo email esta vacio")
//                 return false
//             } else
//             if (login_password == "") {
//                 swalAlertTexto("El Campo contraseña esta vacio")
//                 return false
//             } else
//             if (datos.length < 1) {
//                 Swal.fire({
//                     title: 'Aun no estas Registrado, deseas Registrarte? ',
//                     icon: 'warning',
//                     position: 'top-center',
//                     showCancelButton: true,
//                     confirmButtonColor: '#3085d6',
//                     cancelButtonColor: '#d33',
//                     confirmButtonText: 'Registrarme',
//                     cancelButtonText: 'Cancelar',
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         window.location.href = "./formulario.html"
//                     }
//                 });
//                 return false
//             } else if (login_e_mail != datos[0].email) {
//                 swalAlertTexto("El email Ingresado No es correcto")
//                 return false
//             } else
//             if (login_password != datos[0].password) {
//                 swalAlertTexto("La contraseña Ingresada no es correcta")
//                 return false
//             }
//             guardarSS("usuarioIngresado", datos);
//             document.getElementById("loginForm").reset();
//             usuarioIngresado();
//         });
//     });
// }

// const mostrarPassword = () => {
//     let cambio = document.getElementById("loginPassword");
//     if (cambio.type == "password") {
//         cambio.type = "text";
//         let ojo = document.getElementById("eye");
//         ojo.classList.remove('fa-eye-slash')
//         ojo.classList.add('fa-eye');
//     } else if (cambio.type = "password") {
//         let ojo = document.getElementById("eye");
//         ojo.classList.remove('fa-eye');
//         ojo.classList.add('fa-eye-slash')
//     }
// }



// const swalAlertTexto = (parametro) => {
//     Swal.fire({
//         title: parametro,
//         showClass: {
//             popup: 'animate__animated animate__fadeInDown'
//         },
//         confirmButtonColor: '#3085d6',
//     });
// }

// const alertTostyTop = (texto, gradient) => {
//     Toastify({
//         text: texto,
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "top",
//         position: "center",
//         stopOnFocus: true,
//         style: {
//             background: gradient,
//         },
//         onClick: function () {}
//     }).showToast();
// }


// function eliminarProducto(id) {
//     let productos_carrito = obtenerLS("carrito");
//     let index = productos_carrito.findIndex(element => element.id == id);
//     index > -1 & productos_carrito[index].cantidad--; // -- (-=)

//     if (productos_carrito[index].cantidad == 0) {
//         productos_carrito.splice(index, 1);
//     }
//     alertTostyTop("Eliminaste el producto del carrito", "linear-gradient(to right,#240000, #230000)")
//     guardarLS("carrito", productos_carrito);
//     renderProductosCarrito();
//     actualizarContadorCarrito();
// }

//Copia texto al porta papeles
const CopiarPortaPapeles = () => {
    let contenido = document.getElementById('codigo').innerHTML;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            swalAlertTexto("Codigo Copiado al Porta papeles")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
    document.getElementById("contCodBtnCopy").classList.add("visually-hidden");
    document.getElementById("formNL").reset();
}

// document.getElementById("btnPasword").addEventListener("click", mostrarPassword);
// login();
// actualizarContadorCarrito();