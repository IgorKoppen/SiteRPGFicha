import {Pericias} from "./modulos/Periciais.js";
import {AtributosPersonagem} from "./modulos/Atributos.js";
import {FichaView} from "./components/Ficha-view.js";
import {PericiaView} from "./components/Pericia-view.js";

const pericias = [{
    nome: "Acrobacia",
    total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Atletismo",
    total: 0,
    nivel: 0,
    Tipo: "For",
    Treino: 0,
    outros: 0
}, {
    nome: "Atuação",
    total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
},
{
    nome: "Cavalgar",
    total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
},
{
    nome: "Conhecimento",
    total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
},
{
    nome: "Cura",
    total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Diplomacia",
    total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
}, {
    nome: "Enganação",
    total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
}, {
    nome: "Fortitude",
    total: 0,
    nivel: 0,
    Tipo: "Con",
    Treino: 0,
    outros: 0
}, {
    nome: "Furtividade",
    total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Guerra",
    total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
}, {
    nome: "Iniciativa",
    total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Intimidação",
    total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
}, {
    nome: "Intuição",
    total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Investigação",
    total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
},
{
    nome: "Jogatina",
    total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
}, {
    nome: "Ladinagem",
    total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Luta",
    total: 0,
    nivel: 0,
    Tipo: "For",
    Treino: 0,
    outros: 0
},
{
    nome: "Misticismo",
    total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
},
{
    nome: "Nobreza",
    total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
},
{
    nome: "Ofício",
    total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
}, {
    nome: "Ofício",
    total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
}, {
    nome: "Percepção",
    total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Pilotagem",
    total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Pontaria",
    total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Reflexos",
    total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Religião",
    total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Sobrevivência",
    total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Vontade",
    total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}
]
const ArrayPericias = []

new FichaView().render();
const atributos = new AtributosPersonagem(0,0,0,0,0,0);

pericias.forEach(pericia => {
    let {nome,total,nivel,Tipo,Treino,outros} = pericia
    pericia = new Pericias(nome ,total ,nivel ,Tipo ,Treino ,outros)
    ArrayPericias.push(pericia)
})

const ViewPericias = new PericiaView(ArrayPericias);
ViewPericias.render()


const nivel = document.querySelector("#Nivel");
const inputNivelHalf = document.querySelectorAll(".nivelhalf");
const inputTreino = document.querySelectorAll(".treino");
const inputOutros = document.querySelectorAll(".outros");
const inputsAtributes = document.querySelectorAll(".EventInputAtributo");


inputsAtributes.forEach(input =>{input.addEventListener("change", setAtribute);})  
nivel.addEventListener("change", setDataHalfNivel);



inputTreino.forEach((input) => {
    input.addEventListener("change", setDataTreino)
})

inputOutros.forEach((input) => {
    input.addEventListener("change", setDataOutros);
})




function setAtribute(e){
    const forView = document.querySelector("#ForcaModificador");
    const desView =  document.querySelector("#DestrezaModificador");
    const conView =  document.querySelector("#ConstituicaoModificador");
    const intView =  document.querySelector("#InteligenciaModificador");
    const sabView =  document.querySelector("#SabedoriaModificador");
    const carView =  document.querySelector("#CarismaModificador");
    
    switch (e.target.dataset.nameatribute) {
        case "For":
            atributos._forca = e.target.value;
            forView.textContent =   atributos.calcMod(atributos._forca);
            break;
        case "Des":
            atributos._destreza = e.target.value;
            desView.textContent = atributos.calcMod(atributos._destreza);
            break;
        case "Con":
            atributos._constituicao = e.target.value;
            conView.textContent = atributos.calcMod(atributos._constituicao);
            break;
        case "Int":
            atributos._inteligencia = e.target.value;
            intView.textContent = atributos.calcMod(atributos._inteligencia);
            break;
        case "Sab":
            atributos._sabedoria = e.target.value;
            sabView.textContent = atributos.calcMod( atributos._sabedoria);
            break;
        case "Car":
            atributos._carisma = e.target.value;
            carView.textContent = atributos.calcMod(atributos._carisma);
            break;
            default:
                console.log("Erro indentificador não encontrado!")
            break;
    }

}

function setDataHalfNivel(e){
    ArrayPericias.forEach(periciaItem => {
     periciaItem.setNivel(e.target.value);
     ViewPericias.updateAllnivel()
     ViewPericias.updateTotalNivel()
    });
}

function setDataTreino(e){
    const index = parseInt(e.target.dataset.index);
    const value = parseInt(e.target.value);
   ArrayPericias[index].setTreino(parseInt(value));
   ViewPericias.updateTotal(e.target);
}

function setDataOutros(e){
    const index = parseInt(e.target.dataset.index);
    const value = parseInt(e.target.value);
    ArrayPericias[index].setOutro(value);
    ViewPericias.updateTotal(e.target);
}



