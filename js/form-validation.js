let input__nombre = document.getElementById('input-name');
let input__email = document.getElementById('input-email');
let input__mensaje = document.getElementById('input-message');
let form = document.getElementById('form')
let form__coments = document.querySelectorAll('#form-coment');


function validarPalabra(palabra) {
    let esValida = false
    if(palabra.length == 0){
        esValida = false
    } else {
        esValida = true
        }

        return esValida   
}

input__nombre.addEventListener('input', (e) => {
    if (!validarPalabra(e.target.value)) {
        input__nombre.className = 'error'
        e.target.setCustomValidity('Debe ingresar al menos un caracter')
    }
    else {
        input__nombre.className = 'noError'
        e.target.setCustomValidity('')
    }
})

input__email.addEventListener('input', (e) => {
    if ( (!validarPalabra(e.target.value)) || (!e.target.value.includes('@')) ) {
        input__email.className = 'error'
        e.target.setCustomValidity('Debe ingresar un correo válido')

    }
    else {
        input__email.className = 'noError'
        e.target.setCustomValidity('')
    }
})

input__mensaje.addEventListener('input', e => {
    if (!validarPalabra(e.target.value)) {
        input__mensaje.className = 'error'
        e.target.setCustomValidity('Debe ingresar al menos un caracter')
    }
    else {
        input__mensaje.className = 'noError'
        e.target.setCustomValidity('')
    }
})

form.addEventListener('submit', (e) => {
    if (!validarPalabra(input__nombre.value) || (!validarPalabra(input__email.value)) ) {
        input__nombre.setAttribute('placeholder','Este campo es obligatorio')
        input__email.setAttribute('placeholder','Este campo es obligatorio')
        form__coments[0].classList.add('hidden')            
        form__coments[1].classList.remove('hidden') 
        e.preventDefault()
    } else {
        e.submit
    }
});

    window.addEventListener('load', () => {
        input__nombre.value = '';
        input__email.value = '';
        input__mensaje.value = '';
    })