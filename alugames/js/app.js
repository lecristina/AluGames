function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = '<a>Alugar</a>';
        imagem.classList.remove('dashboard__item__img--rented');  

    } else if (botao.classList.contains('dashboard__item__button')) {
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = '<a>Devolver</a>';
        imagem.classList.add('dashboard__item__img--rented');
        
    } else {
        console.log('Não foi possível realizar operação');
        
    }  
};
