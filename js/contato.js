let bdContatos = [{nome:"iago",email:"iago@digitalhouse.com" , telefones:[79991916565,7965652121]},
{nome:"Sergio",email:"Sergio@digitalhouse.com" , telefones:[8191656565,8165651414]}]

function carregaContatos(contatos){
    let cardsContatos = document.getElementById('cardsContatos');
    
    let cardContatoNaolocalizadoHtml = `<section>
    <h3>Não há contatos cadastrados</h3>
    </section>`
    
    if(contatos.length <= 0){
        console.log('não funcionou');
        cardsContatos.innerHTML = cardContatoNaolocalizadoHtml;
    } else {
        console.log('funcionou')
        let cardsContatosHtml = '';
        for(let contato of contatos){
           console.log(contato.telefones)
           let telefonesHtml = ''
           for (const telefone of contato.telefones) {
            // telefonesHtml = telefonesHtml + `<li><a href="tel:${telefone}">${telefone}</a></li>`
               telefonesHtml += `<li><a href="tel:${telefone}">${telefone}</a></li>`
           }
           //cardsContatosHtml = cardsContatosHtml + `cardsContatosHtml`
           cardsContatosHtml  +=  `<section>
           <h3>${contato.nome}</h3>
           <h4>${contato.email}</h4>
           <ul>
              ${telefonesHtml}
           </ul>
           <a href="#">Editar</a>
       </section>`
        }
        cardsContatos.innerHTML = cardsContatosHtml
    }
}

carregaContatos(bdContatos);