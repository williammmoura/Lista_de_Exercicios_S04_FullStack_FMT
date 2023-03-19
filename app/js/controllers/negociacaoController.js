class NegociacaoController{
    //Estanciando os atributos privados (referente aos campos da tag "form" do HTML)
    #campoData;
    #campoQuantidade;
    #campoValor;

    constructor(){
        this.#campoData = document.getElementById("data");
        this.#campoQuantidade = document.getElementById("quantidade");
        this.#campoValor = document.getElementById("valor");
    };
};