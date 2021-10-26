const url = "http://contatos-nodb.herokuapp.com"
const home = `<nav>
<ul>
    <li class="selected"><a>Home</a></li>
    <li><a href="#" id="linkAbrirModal">Adicionar Contato</a></li>
    <li><a href="index.html"><i class="material-icons">exit_to_app</i></a></li>
</ul>
</nav>
<main id="cardsContatos">
<section>
    <h3>Nome do Contato</h3>
    <h4>email@docontato.com</h4>
    <ul>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
    </ul>
    <a href="#">Editar</a>
</section>
<section>
    <h3>Nome do Contato</h3>
    <h4>email@docontato.com</h4>
    <ul>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
    </ul>
    <a href="#">Editar</a>
</section>
<section>
    <h3>Nome do Contato</h3>
    <h4>email@docontato.com</h4>
    <ul>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
    </ul>
    <a href="#">Editar</a>
</section>
<section>
    <h3>Nome do Contato</h3>
    <h4>email@docontato.com</h4>
    <ul>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
    </ul>
    <a href="#">Editar</a>
</section>
<section>
    <h3>Nome do Contato</h3>
    <h4>email@docontato.com</h4>
    <ul>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
    </ul>
    <a href="#">Editar</a>
</section>
<section>
    <h3>Nome do Contato</h3>
    <h4>email@docontato.com</h4>
    <ul>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
    </ul>
    <a href="#">Editar</a>
</section>
<section>
    <h3>Nome do Contato</h3>
    <h4>email@docontato.com</h4>
    <ul>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
    </ul>
    <a href="#">Editar</a>
</section>
<section>
    <h3>Nome do Contato</h3>
    <h4>email@docontato.com</h4>
    <ul>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
    </ul>
    <a href="#">Editar</a>
</section>
<section>
    <h3>Nome do Contato</h3>
    <h4>email@docontato.com</h4>
    <ul>
        <li><a href="tel:9999999999">99999 - 9999</a></li>
    </ul>
    <a href="#">Editar</a>
</section>
</main>`

//Associar a submissão do formulário a função onFormularioSubmit
const form =  document.getElementById("form");

form.addEventListener('submit', onFormularioSubmit);

//Criar a função onFormularioSubmit impedindo a submissão do formulário
function onFormularioSubmit(evt){
    evt.preventDefault(); //cancela o comportamento padrão (não executa o action do form)
   
    //capturar os dados nome, email, e senha para envio
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;




    //chamar a função cadastrar
    cadastrar(nome, email, senha);

}

async function cadastrar(nome, email, senha){
 let response = await fetch(`${url}/registrar`, {
      method:"POST",
      body: JSON.stringify({nome, email, senha}),
      headers: {'Content-type': 'application/json'}
    })

    //convertendo response em json (string)
    let json = await response.json();

    console.log(json);

    // * sessionStorage só guarda string
    //Guardar o token no sessionStorage (setItem) - para recurar usa getItem
    window.sessionStorage.setItem("token", json.token);

    getContatos();

}
//Criar uma função getContatos que vai disparar uma requisição get 
//para /contatos, lembrar de setar o header 
//Authorization: Bearer XUOIHIXUhXIH
async function getContatos(){
    let resposta= await fetch(`${url}/contatos`, {
        method:"GET",
        headers: {
            //para recurar usa getItem
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        },
        
      })

      let contatos = await resposta.json();

      console.log(contatos)
}




