let input__nombre = document.getElementById('input-name');
let input__email = document.getElementById('input-email');
let input__mensaje = document.getElementById('input-message');
let submit = document.getElementById('btn-submit')
let form__coments = document.querySelectorAll('#form-coment');

window.addEventListener('load', () => {
    input__nombre.value = '';
    input__email.value = '';
    input__mensaje.value = '';
})

function validarPalabra(palabra) {
    let esValida = false
    const validar = new RegExp(`^[A-Z\u00f1\u00d1\]+$`,'i');
    if(!palabra){
        esValida = false
    } else {
        for (let i=0;i<palabra.length;i++){
            if(!validar.test(palabra[i])){
                esValida = false
                break
            }else{
                esValida = true
            }
        }
    }
   return esValida   
}

input__nombre.addEventListener('input', e => {
    if (e.target.value.length == 0) {
        input__nombre.className = 'error'
        e.target.setCustomValidity('Debe ingresar al menos un caracter')
    }
    else {
        input__nombre.className = 'noError'
        e.target.setCustomValidity('')
    }
})

input__email.addEventListener('input', e => {
    if (!e.target.value.includes('@')) {
        input__email.className = 'error'
        e.target.setCustomValidity('Debe ingresar un correo válido')
    }
    else {
        input__email.className = 'noError'
        e.target.setCustomValidity('')
    }
})

input__mensaje.addEventListener('input', e => {
    if (e.target.value.length == 0) {
        input__mensaje.className = 'error'
        e.target.setCustomValidity('Debe ingresar al menos un caracter')
    }
    else {
        input__mensaje.className = 'noError'
        e.target.setCustomValidity('')
    }
})

submit.addEventListener('click', (e) => {
    console.log('error')
    e.preventDefault()
    if (!validarPalabra(input__nombre) || (!validarPalabra(input__email)) || (!validarPalabra(input__mensaje)) ) {
        console.log('error2')
        for(let x = 0; x < form__coments.length; x++) {
            form__coments[x].classList.toggle('hidden')
            
        }
    }
});
