let bdContatos = [{id: 1, nome:"iago",email:"iago@digitalhouse.com" , telefones:[79991916565,7965652121]},
{id: 2, nome:"Sergio",email:"Sergio@digitalhouse.com" , telefones:[8191656565,8165651414]}]

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
           cardsContatosHtml  +=  `<section id="contato_${contato.id}">
           <h3>${contato.nome}</h3>
           <h4>${contato.email}</h4>
           <ul>
              ${telefonesHtml}
           </ul>
           <div>
                <a href="#" onclick="removerContato(${contato.id})">Remover</a>
                <a href="#">Editar</a>
           </div>
       </section>`

        }
        cardsContatos.innerHTML = cardsContatosHtml
    }
}

carregaContatos(bdContatos);

function removerContato(id){
    //remover elemento do DOM
    document.getElementById(`contato_${id}`).remove();
    //remover elemento do array bdContatos
    bdContatos = bdContatos.filter(contato => contato.id!=id);
    console.log(bdContatos);
    carregaContatos(bdContatos);

    

}