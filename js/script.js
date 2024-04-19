const camposDoFormulario = document.querySelectorAll("[required");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur" , () => verificaCampo(campo));

})

function verificaCampo(campo) {

}

function isValidEmail(email) {

    var regEmail = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/gmi;

    email.replace(regEmail, function(match){
        if(match === email){
            alert('Email válido');
        }else{      
            alert('Email inválido');    
        }
    });     
}
    