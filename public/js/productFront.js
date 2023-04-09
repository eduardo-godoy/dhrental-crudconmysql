window.addEventListener("load", function () {

    const formulario = document.querySelector("form");
    const titulo = document.querySelector("#titulo");
    const descripcion = document.querySelector("#descripcion");
    const precio = document.querySelector("#precio");
    const imagen = document.querySelector("#imagen");

    const tituloError = document.querySelector("p.titulo");
    const descripcionError = document.querySelector("p.description");
    const precioError = document.querySelector("p.precio");
    const imagenError = document.querySelector("p.imagen");

    titulo.focus()



    formulario.addEventListener("submit", function (e) {


        let errores = [];


        if (imagen.value.indexOf('.jpg') != -1 || imagen.value.indexOf('.png') != -1 || imagen.value.indexOf('.jpeg') != -1 || imagen.value.indexOf('.gif') != -1 || imagen.value == 0) {

            imagenError.innerHTML = ""
            imagen.style.border = '1px solid gray'

        } else {

            errores.push(imagenError.innerHTML = "La imagen debe ser .jpg, jpeg, .png, .gif");
            imagenError.style.color = 'red';
            imagen.style.border = '1px solid red'

        }
        if (titulo.value.length == 0) {

            errores.push(tituloError.innerHTML = "El titulo tiene que estar completo");
            tituloError.style.color = 'red';
            titulo.style.border = '1px solid red'

        } else if (titulo.value.length < 5) {

            errores.push(tituloError.innerHTML = "El titulo tiene que tener un mínimo de 5 caracteres")
            tituloError.style.color = 'red'
            titulo.style.border = '1px solid red'

        } else {

            tituloError.innerHTML = "";
            titulo.style.border = '1px solid gray'

        }
        if (descripcion.value.length == 0) {

            errores.push(descripcionError.innerHTML = "La descripcion tiene que estar completa");
            descripcionError.style.color = 'red';
            descripcion.style.border = '1px solid red'

        } else if (descripcion.value.length < 20) {

            errores.push(descripcionError.innerHTML = "La descripcion tiene que tener un mínimo de 20 caracteres");
            descripcionError.style.color = 'red';
            descripcion.style.border = '1px solid red'

        } else {

            descripcionError.innerHTML = "";
            descripcion.style.border = '1px solid gray'

        }
        if (precio.value.length == 0) {

            errores.push(precioError.innerHTML = "El producto debe tener un precio");
            precioError.style.color = 'red';
            precio.style.border = '1px solid red'

        } else if (precio.value.length < 5) {

            errores.push(precioError.innerHTML = "El producto debe tener un precio mayor a 5 numeros")
            precioError.style.color = 'red'
            precio.style.border = '1px solid red'

        } else {

            precioError.innerHTML = "";
            precio.style.border = '1px solid gray'

        }
        if (errores.length > 0) {
            e.preventDefault();
        } else {
            formulario.submit()
        }
    })
})