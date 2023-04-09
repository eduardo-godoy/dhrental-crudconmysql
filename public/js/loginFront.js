window.addEventListener('load', function () {


    const formulario = document.querySelector('form');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const EmailError = document.querySelector('p.email');
    const passwordError = document.querySelector('p.password');


    formulario.addEventListener('submit', (e) => {


        let errores = [];


        if (email.value.length == 0) {

            errores.push(EmailError.innerHTML = "Debes Escribir un email");
            EmailError.style.color = 'red';
            email.style.border = '2px solid red';

        } else if (email.value.indexOf('.com') != -1 && email.value.indexOf('@') != -1 && (email.value.indexOf('hotmail') != -1 || email.value.indexOf('gmail') != -1 || email.value.indexOf('outlook'))) {

            EmailError.innerHTML = "";
            email.style.border = '2px solid gray';

        } else {

            errores.push(EmailError.innerHTML = "EL email introducido es inválido");
            email.style.border = '2px solid red';
            EmailError.style.color = 'red';

        }
        if (password.value.length == 0) {

            errores.push(passwordError.innerHTML = "Debes escribir una contraseña");
            passwordError.style.color = 'red';
            password.style.border = '2px solid red';

        } else if (password.value.length < 8) {

            errores.push(passwordError.innerHTML = "El password tiene que tener un mínimo de 8 caracteres");
            passwordError.style.color = 'red';
            password.style.border = '2px solid red';

        } else {

            passwordError.innerHTML = "";
            password.style.border = '2px solid gray';

        }
        if (errores.length > 0) {
            e.preventDefault();
        } else {
            formulario.submit();
        }

    });
});