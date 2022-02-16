class Anotacoes {
    constructor(titulo, notas) {

        try {
            if (typeof titulo != 'string')
                throw new Error('Criação de notas - dados inválidos!');
            
            if (typeof notas != 'string')
                throw new Error('Criação de notas - dados inválidos!');
            
        } catch (error) {
            console.error(error.message);
        }

        this.titulo = titulo;
        this.notas = notas;
    }
    
}