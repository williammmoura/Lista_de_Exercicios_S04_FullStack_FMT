class NegociacaoController{
    //Estanciando os atributos privados (referente aos campos da tag "form" do HTML)
    #campoData;
    #campoQuantidade;
    #campoValor;
    #dadosCliente = new this.#dadosCliente();

    constructor(){
        this.#campoData = document.getElementById("data");
        this.#campoQuantidade = document.getElementById("quantidade");
        this.#campoValor = document.getElementById("valor");
    };

    //Criando um Método (criarNegociacao())
    criarNegociacao(){
        let data = this.#campoData.value;
        let quantidade = this.#campoQuantidade.value;
        let valor = this.#campoValor.value;

        //Criando uma negociação com os dados do formulário e exibir a negociação criada no console do navegador.
        let cliente = new Cliente(data, quantidade, valor);
        this.#dadosCliente.adicionar(cliente);
        console.log(this.#dadosCliente.cliente);
    };
};