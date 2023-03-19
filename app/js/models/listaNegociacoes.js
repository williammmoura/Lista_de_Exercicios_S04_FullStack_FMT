export class ListaNegociacoes{
    //Criar um atributo array para receber novas negociações.
    #negociacoes = [];

    //Criando método para adicionar (negociacao), que irá adicionar a negociação criada na lista de negociação.
    adicionar(negociacoes){
        this.#negociacoes.push(negociacoes);
    };
}