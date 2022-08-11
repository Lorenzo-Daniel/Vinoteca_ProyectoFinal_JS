// function validarForm() {
//     actualizarContadorCarrito()
//     document.getElementById("form").addEventListener("submit", (e) => {
//         e.preventDefault()
//     })

//     let nombre = document.getElementById("nombre").value;
//     let apellido = document.getElementById("apellido").value;
//     let email = document.getElementById("email").value;
//     let telefono = document.getElementById("telefono").value;
//     let domicilio = document.getElementById("domicilio").value;
//     let password = document.getElementById("password").value;
//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

//     if (nombre == "") {
//         alertTostyTop(
//             "El campo nombre esta vacio", "linear-gradient(to right,#240000, #230000)"
//         );
//         return false;
//     } else if (apellido == "") {
//         alertTostyTop(
//             "El campo apellido esta vacio", "linear-gradient(to right,#240000, #230000)"
//         );
//         return false;
//     } else
//     if (!regexEmail.test(email)) {
//         alertTostyTop(
//             "El campo email no es valido", "linear-gradient(to right,#240000, #230000)"
//         )
//         return false;
//     } else
//     if (telefono == "") {
//         alertTostyTop(
//             "El campo telefono esta vacio", "linear-gradient(to right,#240000, #230000)"
//         );
//         return false;
//     } else
//     if (domicilio == "") {
//         alertTostyTop(
//             "El campo domicilio esta vacio", "linear-gradient(to right,#240000, #230000)"
//         );
//         return false;
//     } else
//     if (password.length < 8) {
//         alertTostyTop(
//             "La contraseña debe tener mas de 8 caracteres", "linear-gradient(to right,#240000, #230000)"
//         );
//         return false;
//     }


//     const datosIngresados = {
//         nombre: nombre,
//         apellido: apellido,
//         email: email,
//         telefono: telefono,
//         domicilio: domicilio,
//         password: password
//     };

//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Registrado Correctamente',
//         showConfirmButton: true,
//         timer: 4000
//     })
//     console.log(datosIngresados);
//     document.getElementById("form").reset();
//     localStorage.setItem("datosIngresados", JSON.stringify(datosIngresados));
// };

// document.getElementById("btnEnviar").addEventListener("click", validarForm);

const btnEnviar = document.getElementById('btnEnviar')

//Verifica que todo los campos esten completos, guarda LS y envia email (email.js)
const validarForm = () => {
    actualizarContadorCarrito();
    document.getElementById('form')
        .addEventListener('submit', function (e) {
            e.preventDefault();

            let registro = JSON.parse(localStorage.getItem("datosDeUsuario")) || [];
            if (registro.length > 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Ya estas Registrado!<br>Inicia sesion con tu cuenta!',
                    showConfirmButton: true,
                    timer: 4000
                });
                document.getElementById("form").reset();
                return false;
            } else {
                let nombre = document.getElementById("nombre").value;
                let apellido = document.getElementById("apellido").value;
                let e_mail = document.getElementById("email").value;
                let telefono = document.getElementById("telefono").value;
                let domicilio = document.getElementById("domicilio").value;
                let password = document.getElementById("password").value;

                const datosDeUsuario = {
                    nombre: nombre,
                    apellido: apellido,
                    email: e_mail,
                    telefono: telefono,
                    domicilio: domicilio,
                    password: password,
                };

                btnEnviar.value = 'Enviando...';

                const serviceID = 'default_service';
                const templateID = 'template_vo7dneb';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        btnEnviar.value = 'Enviar';
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Registrado Correctamente!',
                            showConfirmButton: true,
                            timer: 4000
                        });
                    }, (err) => {
                        btnEnviar.value = 'Enviar';
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Algo salio mal vuelve a intentarlo',
                            showConfirmButton: true,
                            timer: 6000
                        });
                        console.log(JSON.stringify(err));
                    })
                localStorage.setItem("datosDeUsuario", JSON.stringify(datosDeUsuario));
                document.getElementById("form").reset();
            }
        });
};
validarForm()