function meuNome(nome){
    return ('Meu nome é ' + nome);
}

function verificarIdade(idade){
    if (idade >= 18) {
        console.log(meuNome('Ronaldo ') + ('é Maior'));
    }else{
        console.log('menor');
    }
}

verificarIdade(18);