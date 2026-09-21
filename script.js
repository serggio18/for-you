const botonInicio = document.getElementById("botonInicio");

const pantallaInicio = document.getElementById("inicio");

const paginaPrincipal = document.getElementById("principal");

const contenedorParticulas =
    document.getElementById("particulas");


// ==============================
// INICIAR LA ANIMACIÓN
// ==============================

botonInicio.addEventListener("click", function () {

    pantallaInicio.classList.add("oculto");

    setTimeout(function () {

        paginaPrincipal.classList.add("visible");

    }, 700);

});


// ==============================
// CREAR PARTÍCULAS
// ==============================

function crearParticula() {

    const particula = document.createElement("div");

    particula.classList.add("particula");


    // Tamaño aleatorio

    const tamaño =
        Math.random() * 4 + 2;

    particula.style.width =
        tamaño + "px";

    particula.style.height =
        tamaño + "px";


    // Posición horizontal

    particula.style.left =
        Math.random() * 100 + "%";


    // Duración

    particula.style.animationDuration =
        Math.random() * 6 + 5 + "s";


    // Retraso

    particula.style.animationDelay =
        Math.random() * 3 + "s";


    contenedorParticulas.appendChild(particula);


    // Eliminar después de la animación

    setTimeout(function () {

        particula.remove();

    }, 12000);

}


// Crear partículas continuamente

setInterval(crearParticula, 300);


// ==============================
// PARTÍCULAS AL HACER CLIC
// ==============================

document.addEventListener("click", function (evento) {

    if (!paginaPrincipal.classList.contains("visible")) {
        return;
    }


    for (let i = 0; i < 12; i++) {

        const particula =
            document.createElement("div");

        particula.classList.add("particula");


        particula.style.position =
            "fixed";


        particula.style.left =
            evento.clientX + "px";


        particula.style.top =
            evento.clientY + "px";


        particula.style.width =
            "5px";


        particula.style.height =
            "5px";


        const x =
            (Math.random() - 0.5) * 250;

        const y =
            (Math.random() - 0.5) * 250;


        particula.style.setProperty(
            "--x",
            x + "px"
        );


        particula.style.setProperty(
            "--y",
            y + "px"
        );


        particula.style.animation =
            "explosion 1s ease-out forwards";


        document.body.appendChild(particula);


        setTimeout(function () {

            particula.remove();

        }, 1000);

    }

});