
//Valida si hay Usuario Registrado y si los datos Ingresados Son correctos
const login = () => {
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("loguearse").addEventListener("click", () => {
            const datos = obtenerLS("datosDeUsuario")
            let login_e_mail = document.getElementById("loginE_mail").value;
            let login_password = document.getElementById("loginPassword").value;
            console.log(datos.nombre);
            if (login_e_mail == "") {
                swalAlertTexto("El Campo email esta vacio")
                return false
            } else
            if (login_password == "") {
                swalAlertTexto("El Campo contraseña esta vacio")
                return false
            } else
            if (datos.length < 1) {
                Swal.fire({
                    title: 'Aun no estas Registrado, deseas Registrarte? ',
                    icon: 'warning',
                    position: 'top-center',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Registrarme',
                    cancelButtonText: 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "./formulario.html"
                    }
                });
                return false
            } else if (login_e_mail != datos.email) {
                swalAlertTexto("El email Ingresado No es correcto")
                return false
            } else
            if (login_password != datos.password) {
                swalAlertTexto("La contraseña Ingresada no es correcta")
                return false
            }
            guardarSS("usuarioIngresado", datos);
            document.getElementById("loginForm").reset();
            usuarioIngresado();
        });
    });
}

//Muestra u oculta la contraseña alternando segun la condicion a travs del atrubuto type
const mostrarPassword = () => {
    let cambio = document.getElementById("loginPassword");
    if (cambio.type == "password") {
        cambio.type = "text";
        let ojo = document.getElementById("eye");
        ojo.classList.remove('fa-eye-slash')
        ojo.classList.add('fa-eye');
    } else if (cambio.type = "password") {
        let ojo = document.getElementById("eye");
        ojo.classList.remove('fa-eye');
        ojo.classList.add('fa-eye-slash')
    }
}

// Actualiza el Estado De usuario
const usuarioIngresado = () => {
    let obtenerSSIngresado = obtenerSS("usuarioIngresado")
    if (obtenerSSIngresado == null) {
        return false
    } else {
        datoNombre = obtenerSSIngresado.nombre
        let i = document.querySelector("#user i")
        i.classList.remove("fa-user");
        i.classList.add("fa-user-check");
        document.getElementById("loginNombre").innerText = datoNombre.toUpperCase();
        console.log(obtenerSSIngresado.Nombre);
    }
}
document.getElementById("btnPasword").addEventListener("click", mostrarPassword);
usuarioIngresado();
login();
