class Anotacoes {
    constructor(titulo, notas) {

        try {
            if (typeof titulo != 'string'){
                throw new Error('Criação de notas - dados inválidos!');
            
            } else if (typeof notas != 'string'){
                throw new Error('Criação de notas - dados inválidos!');
            
            } 
        
        } catch (error) {
            console.log(error.message);
        }

        this.titulo = titulo;
        this.notas = notas;
    }
    
}
