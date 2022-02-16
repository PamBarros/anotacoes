class AnotacoesController {
    constructor (){
        this.arr = [];  
        this.view = new AnotacoesView;      
    }

    addAnotacao(){
        const titulo = $('#titulo').val();
        const nota = $('#descricaoTarefa').val();
        const novaAnotacao = new Anotacoes(titulo, nota)
        this.arr.push(novaAnotacao)
        console.log(novaAnotacao);

        this.view.renderizaAnotacao(novaAnotacao);

        $('#titulo').val("");
        $('#descricaoTarefa').val("");
    }
}

const controller = new AnotacoesController();

$('form').submit((event) =>{
    event.preventDefault();

    controller.addAnotacao();

});