function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let inputEmail = document.querySelector('#email');

//Associar ao evento keypress uma função que verique se o conteúdo do campo é um e-mail válido.
//Caso seja, aplicar a classe input.erro ao campo, caso contrário limpar as classes do campo.

//keypress, keydown, keyup

//event (passado como parametro , é um objeto que carrega as informações do evento)
inputEmail.addEventListener('keypress', function(event){
    // event.preventDefault(); //cancela o comportamento padrão (não adiciona as teclas apertadas)
    
    // Se conteúdo do campo for e-mail, limpar classe, se não aplicar a classe input.erro
    if(validateEmail(inputEmail.value)){
        inputEmail.className = ""
    } else {
        inputEmail.className = "erro"
    }
})