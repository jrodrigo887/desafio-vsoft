
// remover acentos e caracteres especiais.
function removerAcentos(str) {
    str = str.replace(/[]/, "");
    str = str.replace(/[ÀÁÂÃÄÅ]/, "a");
    str = str.replace(/[àáâãäå]/, "a");
    str = str.replace(/[ÈÉÊË]/, "e");
    str = str.replace(/[éèê]/, "e");
    str = str.replace(/[ÍÌ]/, "i");
    str = str.replace(/[íì]/, "i");
    str = str.replace(/[ÓÒÔ]/, "o");
    str = str.replace(/[óòô]/, "o");
    str = str.replace(/[ÚÙ]/, "u");
    str = str.replace(/[úù]/, "u");
    str = str.replace(/[Ç]/, "c");
    str = str.replace(/[ç]/, "c");
    str = str.toLowerCase();
    return str;
}


const inputTexto = document.getElementById('input');
const usuarios = document.querySelectorAll('.usuario');
const cards = document.querySelectorAll('.card');
const body = document.querySelector('.lista-body');
var cardsItems = [];

// Setar o card pesquisado no topo da lista.
function setarCards(numIndice) {
     cardsItems = [...cards];
     let arrayCard = [];

    cards.forEach((vl) => {
        if(vl == cards.item(numIndice)){
            arrayCard.push(vl);
        } 
        vl.remove(); 
    })
    // cardsItems.unshift(cards.item(numIndice));
    body.append(...arrayCard);
}
    
inputTexto.addEventListener('keyup', function(evt) {
   
        const valor = evt.target.value
        if(valor.trim().length){
            const stringTratada = removerAcentos(valor);
            usuarios.forEach((us, i) => {
                const targetValue =   us.textContent;
               
                const res = us.classList.toggle('is-found', stringTratada == removerAcentos(targetValue))
                if(res) {
                    us.setAttribute("color", 'white')
                    setarCards(i);
                }
            });

        } else {
            usuarios.forEach((vl) => {vl.classList.remove('is-found')});

            if(cardsItems.length > 0) {
                body.append(...cardsItems);
            }
        }
    });
