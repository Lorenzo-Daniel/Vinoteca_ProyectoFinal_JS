const alertTostyTop = (texto, gradient) => {
    Toastify({
        text: texto,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: gradient,
        },
        onClick: function () {}
    }).showToast();
}

const swalAlertTexto = (parametro) => {
    Swal.fire({
        title: parametro,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        confirmButtonColor: '#3085d6',
    });
}