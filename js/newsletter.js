const btnNL = document.getElementById('btnNL');

//verifica si hay datos de usuario registrados, si el usario tiene sesion iniciada y el email coincide
const validarNewsletter = () => {
    document.getElementById("formNL").addEventListener("submit", (e) => {
        e.preventDefault();
        let obtenerDatos = JSON.parse(localStorage.getItem("datosDeUsuario")) || [];
        let email = document.getElementById("emailNL").value;
        let obtenerIngreso = obtenerSS("usuarioIngresado")
        console.log(obtenerIngreso);
        if (email == "") {
            swalAlertTexto("El campo email esta vacio")
        } else if (obtenerDatos.length === 0) {
            Swal.fire({
                title: 'Aun no tienes Usuario Registrado, deseas Registrarte? ',
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
        } else if (obtenerIngreso == null) {
            swalAlertTexto("Para subscribirte debes Iniciar sesion con tu Usuario")
            return false
        } else if (obtenerIngreso.email != email) {
            swalAlertTexto("El mail Ingresado no coincide con el de tu Usuario")
            return false
        } else {
            let obtenerLS = JSON.parse(localStorage.getItem("codigo")) || [];
            if (obtenerLS.length !== 0) {
                swalAlertTexto("Ya estas Subscrito a nuestro Newsletter!")
                return false
            } else {
                let codigoGenerado = generadorNumero();
                localStorage.setItem("codigo", codigoGenerado);
                document.getElementById("codigo").innerHTML = codigoGenerado;
                document.getElementById("contCodBtnCopy").classList.remove("visually-hidden");
                let btnCopy = document.getElementById("btnCopy").addEventListener("click", CopiarPortaPapeles)
                setTimeout(() => {
                    document.getElementById("contCodBtnCopy").classList.add("visually-hidden");
                }, 8000)
            }
        }
    });
}

//Genera y retorna un Numero random que sera el codigo de descuento
const generadorNumero = () => {
    return Math.round(Math.random() * 10000 + 1001)
}

validarNewsletter();