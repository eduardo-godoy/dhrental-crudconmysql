window.addEventListener("load", function () {

    const formulario = document.querySelector("form");
    const nombre = document.querySelector("#name");
    const apellido = document.querySelector("#last_name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const domicilio = document.querySelector("#adress");
    const celular = document.querySelector("#cel");
    const imagen = document.querySelector("#image");

    const nombreError = document.querySelector("p.name");
    const apellidoError = document.querySelector("p.last_name");
    const emailError = document.querySelector("p.email");
    const passwordError = document.querySelector("p.password");
    const domicilioError = document.querySelector("p.adress");
    const celularError = document.querySelector("p.cel");
    const imagenError = document.querySelector("p.image");

    nombre.focus();

    formulario.addEventListener("submit", function (e) {


        let errores = [];


        if (nombre.value.length == 0) {

            errores.push(nombreError.innerHTML = "El nombre tiene que estar completo");
            nombreError.style.color = 'red';
            nombre.style.border = '2px solid red';

        } else if (nombre.value.length < 2) {

            errores.push(nombreError.innerHTML = "El nombre tiene que tener un minimo de 2 caracteres");
            nombreError.style.color = 'red';
            nombre.style.border = '2px solid red';

        } else {

            nombreError.innerHTML = "";
            nombre.style.border = '2px solid gray';

        }
        if (apellido.value.length == 0) {

            errores.push(apellidoError.innerHTML = "El apellido tiene que estar completo");
            apellidoError.style.color = 'red';
            apellido.style.border = '2px solid red';

        } else if (apellido.value.length < 2) {

            errores.push(apellidoError.innerHTML = "El apellido tiene que tener un minimo de 2 caracteres");
            apellidoError.style.color = 'red';
            apellido.style.border = '2px solid red';

        } else {

            apellidoError.innerHTML = "";
            apellido.style.border = '2px solid gray';

        }
        if (email.value.length == 0) {

            errores.push(emailError.innerHTML = "El email tiene que estar completo");
            emailError.style.color = 'red';
            email.style.border = '2px solid red';

        } else if (email.value.indexOf('.com') != -1 && email.value.indexOf('@') != -1 && (email.value.indexOf('hotmail') != -1 || email.value.indexOf('gmail') != -1 || email.value.indexOf('outlook') != -1)) {

            emailError.innerHTML = "";
            email.style.border = '2px solid gray';

        } else {

            errores.push(emailError.innerHTML = "Email invalido");
            emailError.style.color = 'red'
            email.style.border = '2px solid red';

        }
        if (password.value.length == 0) {

            errores.push(passwordError.innerHTML = "Debes escribir una contraseña");
            passwordError.style.color = 'red';
            password.style.border = '2px solid red';

        } else if (password.value.length < 8) {

            errores.push(passwordError.innerHTML = "El password tiene que tener un minimo de 8 caracteres");
            passwordError.style.color = 'red';
            password.style.border = '2px solid red';

        } else {

            passwordError.innerHTML = ""
            password.style.border = '2px solid gray';

        }
        if (domicilio.value.length == 0) {

            errores.push(domicilioError.innerHTML = "Debes escribir un domicilio");
            domicilioError.style.color = 'red';
            domicilio.style.border = '2px solid red';

        } else if (domicilio.value.length < 8) {

            errores.push(domicilioError.innerHTML = "El domicilio tiene que tener un minimo de 8 caracteres");
            domicilioError.style.color = 'red';
            domicilio.style.border = '2px solid red';

        } else {

            domicilioError.innerHTML = "";
            domicilio.style.border = '2px solid gray';

        }
        if (celular.value.length == 0) {

            errores.push(celularError.innerHTML = "Debes escribir un numero de telefono");
            celularError.style.color = 'red';
            celular.style.border = '2px solid red';

        } else if (celular.value.length < 8) {

            errores.push(celularError.innerHTML = "El celular tiene que tener un minimo de 8 numeros");
            celularError.style.color = 'red';
            celular.style.border = '2px solid red';

        } else {

            celularError.innerHTML = ""
            celular.style.border = '2px solid gray';

        }
        if (imagen.value.indexOf('.jpg') != -1 || imagen.value.indexOf('.png') != -1 || imagen.value.indexOf('.jpeg') != -1 || imagen.value.indexOf('.gif') != -1 || imagen.value == 0) {

            imagen.style.border = '2px solid gray';
            imagenError.innerHTML = ""

        } else {

            errores.push(imagenError.innerHTML = "Solo se admite archivos .jpg, jpeg, .png, gif")
            imagenError.style.color = 'red';
            imagen.style.border = '2px solid red';

        }
        if (errores.length > 0) {
            e.preventDefault();
        } else {
            formulario.submit()
        }

    })
})