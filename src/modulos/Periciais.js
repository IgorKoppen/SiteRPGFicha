export class Pericias {
    nome
    total
    nivel
    tipo
    treino
    outros

    constructor(nome,
        total,
        nivel,
        tipo,
        treino,
        outros) {
        this.nome = nome
        this.total = total
        this.nivel = nivel
        this.tipo = tipo
        this.treino = treino
        this.outros = outros
    }


    setNivel(nivelNew) {
        this.nivel = nivelNew
        this.calculartotal()
    }
    setTreino(treinoNew) {
        this.treino = treinoNew
        this.calculartotal()
    }
    setOutro(outrosNew) {
        this.outros = outrosNew
        this.calculartotal()
    }


    calculartotal() {
        return this.total = parseInt(this.nivel) + parseInt(this.treino) + parseInt(this.outros) + this.GetAtributeMod();
    }

    GetAtributeMod() {
        let AtributePoints;
        switch (this.tipo) {
            case "For":
                AtributePoints = document.getElementById("ForcaModificador").textContent;
                break;
            case "Des":
                AtributePoints = document.getElementById("DestrezaModificador").textContent;
                break;
            case "Con":
                AtributePoints = document.getElementById("ConstituicaoModificador").textContent;
                break;
            case "Int":
                AtributePoints = document.getElementById("InteligenciaModificador").textContent;
                break;
            case "Sab":
                AtributePoints = document.getElementById("SabedoriaModificador").textContent;
                break;
            case "Car":
                AtributePoints = document.getElementById("CarismaModificador").textContent;
                break;
        }
        return parseInt(AtributePoints);
    }


}