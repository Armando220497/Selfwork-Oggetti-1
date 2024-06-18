
let persona = {
    'nome': 'Armando',
    'cognome': 'Di Santo',
    'eta': 27,
    'saluta': function () {
        console.log(`Ciao, sono ${this.nome} ${this.cognome} e ho ${this.eta} anni.`);
    }

};

persona.saluta();


