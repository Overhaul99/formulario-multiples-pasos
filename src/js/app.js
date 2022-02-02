const cancelar = document.querySelector(".btn-cancelar");
const movPag = document.querySelector(".movimientoPagina");
const btn_adelante2 = document.querySelector(".siguientePagina");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante4 = document.querySelector(".adelante-pag4");
const btn_atras3 = document.querySelector(".volver-pag3");
const btn_final = document.querySelector(".fin");

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

//GUARDAR DATOS.
let newUser="";

let max = 4;
let cont = 1;

// cancelar.addEventListener("click", function(e){
//     e.preventDefault();

//     Swal.fire({
//     title: '¿Estás seguro de querer salir?',
//     text: "Se perderán los datos, si es que ya llenó algunos.",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Sí, deseo salir.'
//     }).then((result) => {
//     if (result.value) {
//         location.href="inicio.html"
//     }
//     })
// });

btn_adelante2.addEventListener("click", function(e){

    e.preventDefault();
    const nombre = document.querySelector("#nombres").value;
    const apellido1 = document.querySelector("#apellido1").value;
    const apellido2 = document.querySelector("#apellido2").value;

    if ( nombre=="" && apellido1=="" && apellido2==""){
    document.querySelector("#nombres-error").textContent = "* Este campo no puede quedar vacío.";
    document.querySelector("#nombres").style.borderColor="#DA2A33";
    document.querySelector("#apellido1-error").textContent = "* Este campo no puede quedar vacío.";
    document.querySelector("#apellido1").style.borderColor="#DA2A33";
    document.querySelector("#apellido2-error").textContent = "* Este campo no puede quedar vacío.";
    document.querySelector("#apellido2").style.borderColor="#DA2A33";
    
    }else if ( (nombre=="" || apellido1=="" || apellido2=="") ||
        (nombre.length<2 || apellido1.length<2 || apellido2.length<2) ||
        (!verificarNombre(nombre) || !verificarNombre(apellido1) || !verificarNombre(apellido2))
    ){
    
        if ( nombre=="" ){
        document.querySelector("#nombres-error").textContent = "* Este campo no puede quedar vacío.";
        document.querySelector("#nombres").style.borderColor="#DA2A33";
        } else if ( nombre.length<2 ){
            document.querySelector("#nombres-error").textContent = "* Debe tener 2 o más caractéres.";
            document.querySelector("#nombres").style.borderColor="#DA2A33";   
        } else if ( !verificarNombre(nombre) ) {
            document.querySelector("#nombres-error").textContent = "* Dato no válido.";
            document.querySelector("#nombres").style.borderColor="#DA2A33";
        } else {
            document.querySelector("#nombres-error").textContent = "";
            document.querySelector("#nombres").style.borderColor="lightgrey";   
        }

        if ( apellido1=="" ){
            document.querySelector("#apellido1-error").textContent = "* Este campo no puede quedar vacío.";
            document.querySelector("#apellido1").style.borderColor="#DA2A33";
        } else if ( apellido1.length<2 ){
            document.querySelector("#apellido1-error").textContent = "* Debe tener 2 o más caractéres.";
            document.querySelector("#apellido1").style.borderColor="#DA2A33";   
        } else if ( !verificarNombre(apellido1) ){
            document.querySelector("#apellido1-error").textContent = "* Dato no válido.";
            document.querySelector("#apellido1").style.borderColor="#DA2A33";
        } else {
            document.querySelector("#apellido1-error").textContent = "";
            document.querySelector("#apellido1").style.borderColor="lightgrey";  
        }

        if ( apellido2=="" ){
            document.querySelector("#apellido2-error").textContent = "* Este campo no puede quedar vacío.";
            document.querySelector("#apellido2").style.borderColor="#DA2A33";
        } else if ( apellido2.length<2 ){
            document.querySelector("#apellido2-error").textContent = "* Debe tener 2 o más caractéres.";
            document.querySelector("#apellido2").style.borderColor="#DA2A33"; 
        } else if ( !verificarNombre(apellido2) ){
            document.querySelector("#apellido2-error").textContent = "* Dato no válido.";
            document.querySelector("#apellido2").style.borderColor="#DA2A33";
        } else {
            document.querySelector("#apellido2-error").textContent = "";
            document.querySelector("#apellido2").style.borderColor="lightgrey";  
        }
        } else {
            document.querySelector("#nombres-error").textContent = "";
            document.querySelector("#nombres").style.borderColor="lightgrey";
            document.querySelector("#apellido1-error").textContent = "";
            document.querySelector("#apellido1").style.borderColor="lightgrey";
            document.querySelector("#apellido2-error").textContent = "";
            document.querySelector("#apellido2").style.borderColor="lightgrey";

            movPag.style.marginLeft = "-25%";
            num[cont - 1].classList.add("active");
            progressText[cont - 1].classList.add("active");
            progressCheck[cont - 1].classList.add("active");
            cont += 1;

            let aux = nombre + " " + apellido1 + " " +apellido2;
            newUser = aux.toUpperCase();

/*
    alert("El usuario: \n" + newUser +"\nHa sido registrado con éxito.");

    Swal.fire({
        title: 'Registro',
        html: 'El usuario: <br><b style="color: blue;";>"'+ newUser +'"</b><br> Ha sido registrado con éxito.'
    })
*/

}

    function verificarNombre($n){
        let ExpRegular_Nombre = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+((?:[\s{1}][A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+)+)?$/;
        return ExpRegular_Nombre.test($n);
    }
});

btn_adelante3.addEventListener("click", function(e){

    e.preventDefault();

    let fechaNac = document.querySelector('input[type="date"]').value;
    let sexo = document.getElementById("sexo").value;

    if ( sexo==-1 && fechaNac=="" ){
        document.querySelector("#fechaNac-error").textContent = "* Seleccione una fecha.";
        document.querySelector("#fechaNac").style.borderColor="#DA2A33";
        document.querySelector("#sexo-error").textContent = "* Seleccione una opción.";
        document.querySelector("#sexo").style.borderColor="#DA2A33";
    
    } else if ( sexo=="" || fechaNac=="" ){
    
    if ( sexo=="" ){
        document.querySelector("#sexo-error").textContent = "* Seleccione una opción.";
        document.querySelector("#sexo").style.borderColor="#DA2A33";     
    } else {
        document.querySelector("#sexo-error").textContent = "";
        document.querySelector("#sexo").style.borderColor="lightgrey";
    }

    if ( fechaNac=="" ){
        document.querySelector("#fechaNac-error").textContent = "* Seleccione una fecha.";
        document.querySelector("#fechaNac").style.borderColor="#DA2A33";
    } else {
        document.querySelector("#fechaNac-error").textContent = "";
        document.querySelector("#fechaNac").style.borderColor="lightgrey";  
    }
    
    } else {
        document.querySelector("#sexo-error").textContent = "";
        document.querySelector("#sexo").style.borderColor="lightgrey";
        document.querySelector("#fechaNac-error").textContent = "";
        document.querySelector("#fechaNac").style.borderColor="lightgrey";

        movPag.style.marginLeft = "-50%";
        num[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        cont += 1;
    }

});

btn_adelante4.addEventListener("click", function(e){

    e.preventDefault();

    let correo = document.querySelector("#email").value;
    let numCel = document.querySelector("#numCel").value;

    if ( correo=="" && numCel=="" ){

        document.querySelector("#email-error").textContent = "* Este campo no puede quedar vacío.";
        document.querySelector("#email").style.borderColor="#DA2A33";
        document.querySelector("#numCel-error").textContent = "* Este campo no puede quedar vacío.";
        document.querySelector("#numCel").style.borderColor="#DA2A33";

    }else if ( correo=="" || numCel=="" || 
        correo.length<6 || numCel.length!=10 || 
        !verificarCorreo(correo) || !verificarNumCel(numCel)
    ){
    
    if ( correo=="" ){
        document.querySelector("#email-error").textContent = "* Este campo no puede quedar vacío.";
        document.querySelector("#email").style.borderColor="#DA2A33";
    } else if ( correo.length<6 ){
        document.querySelector("#email-error").textContent = "* Debe tener 6 o más caractéres.";
        document.querySelector("#email").style.borderColor="#DA2A33"; 
    } else if ( !verificarCorreo(correo) ){
        document.querySelector("#email-error").textContent = "* Ingreso de datos inválidos.";
        document.querySelector("#email").style.borderColor="#DA2A33";
    } else {
        document.querySelector("#email-error").textContent = "";
        document.querySelector("#email").style.borderColor="lightgrey";
    }

    if ( numCel=="" ){
        document.querySelector("#numCel-error").textContent = "* Este campo no puede quedar vacío.";
        document.querySelector("#numCel").style.borderColor="#DA2A33";
    }else if ( numCel.length!==10 && !verificarNumCel(numCel) ){
        document.querySelector("#numCel-error").textContent = "* Debe ingresar solo números.";
        document.querySelector("#numCel").style.borderColor="#DA2A33";
    }else if ( numCel.length!==10 ){
        document.querySelector("#numCel-error").textContent = "* Debe tener 10 dígitos.";
        document.querySelector("#numCel").style.borderColor="#DA2A33";
    }else if ( !verificarNumCel(numCel) ){
        document.querySelector("#numCel-error").textContent = "* Ingreso de datos inválidos.";
        document.querySelector("#numCel").style.borderColor="#DA2A33";
    }else {
        document.querySelector("#numCel-error").textContent = "";
        document.querySelector("#numCel").style.borderColor="lightgrey";
    }
    
    } else {

        document.querySelector("#email-error").textContent = "";
        document.querySelector("#email").style.borderColor="lightgrey";
        document.querySelector("#numCel-error").textContent = "";
        document.querySelector("#numCel").style.borderColor="lightgrey";

        movPag.style.marginLeft = "-75%";
        num[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        cont += 1;

}

function verificarCorreo($n){
    let ExpRegular_Correo = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return ExpRegular_Correo.test($n);

/*  if ($n.match(ExpRegular_Correo)){
        return true
    }else{
        return false;
    } */

}

function verificarNumCel($m){
    var ExpRegular_Num = /^[\d]+$/;
    return ExpRegular_Num.test($m);
}

});

let c = 0;

btn_final.addEventListener("click", function(e){

    e.preventDefault();

    // c++;
    // console.log(c);

    let usuario = document.querySelector("#usuario").value;
    let contra = document.querySelector("#password").value;

    if ( usuario=="" && contra=="" ){

        document.querySelector("#usuario-error").textContent = "* Este campo no puede quedar vacío.";
        document.querySelector("#usuario").style.borderColor="#DA2A33";
        document.querySelector("#password-error").textContent = "* Este campo no puede quedar vacío.";
        document.querySelector("#password").style.borderColor="#DA2A33";

    } else if ( usuario=="" || contra=="" || 
        usuario.length<2 || contra.length<5 || 
        !verificarUsuario(usuario) || !verificarContra(contra)
        ){
    
    if ( usuario=="" ){
        document.querySelector("#usuario-error").textContent = "* Este campo no puede quedar vacío.";
        document.querySelector("#usuario").style.borderColor="#DA2A33";
    } else if ( usuario.length<2 && !verificarUsuario(usuario) ){
        document.querySelector("#password-error").textContent = "* Solo mayúsculas, minúsculas y letras.";
        document.querySelector("#password").style.borderColor="#DA2A33";
    } else if ( usuario.length<2 ){
        document.querySelector("#password-error").textContent = "* Debe tener 3 o más caractéres.";
        document.querySelector("#password").style.borderColor="#DA2A33";
    } else if ( !verificarUsuario(usuario) ){
        document.querySelector("#usuario-error").textContent = "* Ingreso de datos inválidos.";
        document.getElementById("usuario").style.borderColor="#DA2A33";
    } else {
        document.querySelector("#usuario-error").textContent = "";
        document.querySelector("#usuario").style.borderColor="lightgrey"; 
    }

    if ( contra=="" ){
        document.querySelector("#password-error").textContent = "* Este campo no puede quedar vacío.";
        document.querySelector("#password").style.borderColor="#DA2A33";
    } else if ( contra.length<5 && !verificarContra(contra) ){
        document.querySelector("#password-error").textContent = "* Mínimo una MAYUSCULA, MINUSCULA y NUMERO.";
        document.querySelector("#password").style.borderColor="#DA2A33";
    } else if ( contra.length<5 ){
        document.querySelector("#password-error").textContent = "* Debe tener 6 a más caractéres.";
        document.querySelector("#password").style.borderColor="#DA2A33";
    } else if ( !verificarContra(contra) ){
        document.querySelector("#password-error").textContent = "* Ingreso de caractéres inválidos.";
        document.querySelector("#password").style.borderColor="#DA2A33";
    } else {
        document.querySelector("#password-error").textContent = "";
        document.querySelector("#password").style.borderColor="lightgrey";
    }
    
    } else {

        document.querySelector("#usuario-error").textContent = "";
        document.querySelector("#usuario").style.borderColor="lightgrey";
        document.querySelector("#password-error").textContent = "";
        document.querySelector("#password").style.borderColor="lightgrey";

        num[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        cont += 1;

        setTimeout(function(){
    
        let timerInterval;
        Swal.fire({

            allowOutsideClick: false,
            allowEscapeKey: false,
            stopKeydownPropagation: false,

            title: 'Realizando registro...',
            timer: 1000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                    const content = Swal.getContent();
                    if (content) {
                        const b = content.querySelector('b');
                        if (b) {
                        b.textContent = Swal.getTimerRight();
                        }
                    }
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                const { value: accept } = Swal.fire({
                        title: 'Terminos y Condiciones',
                        width: '45rem',
                        html: `<span class="alerta-span">Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, utilizaremos datos personales de identificacón, contacto y laborales. <br>
                                Los datos personales que AtomicLabs recaba de usted, serán utilizados para las siguientes finalidades que son necesarias para ofrecer nuestros servicios: <br>
                                </span>
                                <ul class="alerta-ul"><li> AtomicLabs requiere utilizar sus datos personales para incluirlo en la base de datos que utilizamos para prestar los servicios de reclutamiento, selección de personal, administración de nómina y prestación de servicios. AtomicLabs utilizará sus datos personales para evaluar si es posible colocarlo en las vacantes de empleo de la compañia o de los clientes de AtomicLabs y para conocer sus aptitudes, antecedentes y referencias laborales. En este sentido, AtomicLabs utilizará sus datos personales para ponerse en contacto con usted en relación a las vacantes para las cuales podria ser candidato. </li></ul>`,
                        icon:'question',
                        input: 'checkbox',
                        inputValue: 1,
                        inputPlaceholder:
                        '<span class="alerta-footer">Estoy de acuerdo con los terminos y condiciones</span>',
                        confirmButtonText:
                        '<span class="btn-continuar">Continuar</span> <i class="fa fa-arrow-right"></i>',
                        inputValidator: (result) => {
                            return !result && 'Tienes que estar de acuerdo con AtomicLabs'
                        }
                    // title: '<h3 class="title-alert">¡ATENCIÓN!</h3>',
                    // width: '38rem',
                    // html: '<p style="font-size: 1.5rem; line-height: 2.1rem;">Al continuar con el registro, <br>usted acepta los términos y condiciones.</p>',
                    // icon: 'info',
                    // showCancelButton: true,
                    // confirmButtonColor: '#3085d6',
                    // cancelButtonColor: '#d33',
                    // confirmButtonText: '<span style="font-size: 1.5rem;">Sí, continuar.</span>',
                    // cancelButtonText: '<span style="font-size: 1.5rem;">Cancelar</span>',
                    // footer: '<a onclick="terminosCondiciones()" style="font-size: 1.4rem; cursor: pointer;">Ver términos y condiciones.</a>'
                }).then((result) => {
                    if (result.value) {
                        Swal.fire({
                            icon: 'success',
                            title: '¡Enhorabuena!',
                            html: `<p>El usuario</p> <br>
                                    <b style="color: #0e2c48; font-size: 16px;">${newUser}</b> <br>
                                    <br>
                                    <p>Ha sido registado con éxito</p>`,
                            // html: 'El usuario: <br>' +
                            //         '<b style="color: #0E2C48; font-size: px;";>' + 
                            //         newUser +'</b><br> Ha sido registrado con éxito.',

                            confirmButtonText:
                            '<i class="fa fa-thumbs-up"></i> <span class="btn-aceptar">ACEPTAR</span>',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            stopKeydownPropagation: false  
                        }
                        ).then((result) => {
                            if (result.value) {
                            limpiar();
                            location.reload(); 
                            }
                        })
                    } else {
                        cont -= 1;
                    }
                })
            }
        });    
        });

    }

function verificarUsuario($n){
    let ExpRegular_Correo = /^[a-zA-Z][a-zA-Z0-9_]{3,9}$/;
    return ExpRegular_Correo.test($n);
}

function verificarContra($m){
    let ExpRegular_Num = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/; /* al menos un dígito, al menos una minúscula y al menos una mayúscula. */
    return ExpRegular_Num.test($m);
}

function limpiar(){
    document.querySelector("#nombres").value = "";
    document.querySelector("#apellido1").value = "";
    document.querySelector("#apellido2").value = "";
    document.querySelector('input[type="date"]').value = "";
    document.querySelector("#sexo").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#numCel").value = "";
    document.querySelector("#usuario").value = "";
    document.querySelector("#password").value = "";
}

});

btn_atras1.addEventListener("click", function(e){

    e.preventDefault();

    movPag.style.marginLeft = "0%";
    num[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras2.addEventListener("click", function(e){

    e.preventDefault();

    movPag.style.marginLeft = "-25%";
    num[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras3.addEventListener("click", function(e){

    e.preventDefault();

    movPag.style.marginLeft = "-50%";
    num[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    cont -= 1;
});
