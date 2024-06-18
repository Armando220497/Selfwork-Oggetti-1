
// promt per chiedere il nome che poi verra' inserito nell'oggetto persona 
let nome = prompt("Come ti chiami?");


let persona = {
    'nome': nome,
    'cognome': "Di Santo",
    'eta': 27,
    'saluta': function () {
        console.log("Ciao " + this.nome)
    }

};

persona.saluta();


