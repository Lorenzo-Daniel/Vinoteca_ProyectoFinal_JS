
//Oculta o muestra elemento del DOM (header) dependiendo de las condiciones 
window.addEventListener("scroll", () => {
    let main = document.getElementById("main");
    let posicion = main.getBoundingClientRect().top;
    let  headerSection = document.getElementById("hidden");
    if (posicion < 130) {
        headerSection.classList.add('animate__animated', 'animate__fadeOut');
    }
    if (posicion > 130) {
        headerSection.classList.remove('animate__animated', 'animate__fadeOut');
        headerSection.classList.add('animate__animated', 'animate__fadeIn');
    }
});

//Si el evento anterior esta activo(elemento oculto), muestra el elemento onMouseOver
const onMouseOver = ()=> {
    let headerSection = document.getElementById("hidden");
    headerSection.classList.remove('animate__animated', 'animate__fadeOut');
    headerSection.classList.add('animate__animated', 'animate__fadeIn');
}

document.getElementById("hidden").addEventListener("mouseover",()=> {
    onMouseOver()
});