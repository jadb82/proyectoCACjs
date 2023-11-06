// crear constante con el valor del ticket

const valorTicket = 200;

//definir porcentajes de descuentos

let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

//Elementos en variables

let nombre              = document.getElementById("nombre");
let divErrorNombre      = document.getElementById("mensajeErrorNombre");
let apellido            = document.getElementById("apellido");
let divErrorApellido    = document.getElementById("mensajeErrorApellido");
let mail                = document.getElementById("mail");
let cantidadTickets     = document.getElementById("cantidadTickets");
let categoriaSelect     = document.getElementById("categoriaSelect");

//funcion para quitar el estilo de error a los elemnetos//

const quitarClaseError = () => {

    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < listaNodos.length; i++) {
        listaNodos[i].classList.remove('is-invalid');
    }
}

//funcion para calcular el total a pagar //

const totalAPagar =  () => {

    quitarClaseError();

    if (nombre.value === ""){
        alert("Por favor, ingresa tu nombre.");
        nombre.classList.add('is-invalid');
        nombre.focus();
        return;
    }

    if (apellido.value === ""){
        alert("Por favor, ingresa tu apellido.");
        apellido.classList.add('is-invalid');
        apellido.focus();
        return;
    }

    if (mail.value === ""){
        alert("Por favor, ingresa un correo electronico valido.");
        mail.classList.add('is-invalid');
        mail.focus();
        return;
    }
    
    const emailValido = mail => {
        return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(mail);
    }
    
    if (!emailValido(mail.value)){
        alert("Correo electrónico no válido.");
        mail.classList.add('is-invalid');
        mail.focus();
        return;
    }

    if (cantidadTickets.value == 0 || (isNaN(cantidadTickets.value))){
        alert("Ingresa una cantidad de tickets valida.");
        cantidadTickets.classList.add('is-invalid');
        cantidadTickets.focus();
        return;
    }
    
    if (categoriaSelect.value == "") {
        alert("Selecciona la categoria del ticket");
        categorias.classList.add('is-invalid');
        categorias.focus();
        return;
    }

    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    switch (categoriaSelect.value) {

        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
    }

    totalPago.innerHTML = totalValorTickets;

}

//al clickear el boton se recibe un excuhador y se ejecuta la funcion de claciulo//

btnResumen.addEventListener('onClick', totalAPagar);


const resetTotalAPagar = () => {
    quitarClaseError();
    totalPago.innerHTML = "";
    return;
}

//al clickear sobre el boton borrar se ejecuta la funcion flecha resettotalAPagar//

btnBorrar.addEventListener('click', resetTotalAPagar);