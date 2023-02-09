const table = document.getElementById("TablePericias");
const Pericias = [{
    nome: "Acrobacia",
    Total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Atletismo",
    Total: 0,
    nivel: 0,
    Tipo: "For",
    Treino: 0,
    outros: 0
}, {
    nome: "Atuação",
    Total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
},
{
    nome: "Cavalgar",
    Total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
},
{
    nome: "Conhecimento",
    Total: 0,
    nivel: 0,
    Tipo: "int",
    Treino: 0,
    outros: 0
},
{
    nome: "Cura",
    Total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Diplomacia",
    Total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
}, {
    nome: "Enganação",
    Total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
}, {
    nome: "Fortitude",
    Total: 0,
    nivel: 0,
    Tipo: "Con",
    Treino: 0,
    outros: 0
}, {
    nome: "Furtividade",
    Total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Guerra",
    Total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
}, {
    nome: "Iniciativa",
    Total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Intimidação",
    Total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
}, {
    nome: "Intuição",
    Total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Investigação",
    Total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
},
{
    nome: "Jogatina",
    Total: 0,
    nivel: 0,
    Tipo: "Car",
    Treino: 0,
    outros: 0
}, {
    nome: "Ladinagem",
    Total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Luta",
    Total: 0,
    nivel: 0,
    Tipo: "For",
    Treino: 0,
    outros: 0
},
{
    nome: "Misticismo",
    Total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
},
{
    nome: "Nobreza",
    Total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
},
{
    nome: "Ofício",
    Total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
}, {
    nome: "Ofício",
    Total: 0,
    nivel: 0,
    Tipo: "Int",
    Treino: 0,
    outros: 0
}, {
    nome: "Percepção",
    Total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Pilotagem",
    Total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Pontaria",
    Total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Reflexos",
    Total: 0,
    nivel: 0,
    Tipo: "Des",
    Treino: 0,
    outros: 0
}, {
    nome: "Religião",
    Total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Sobrevivência",
    Total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}, {
    nome: "Vontade",
    Total: 0,
    nivel: 0,
    Tipo: "Sab",
    Treino: 0,
    outros: 0
}
]


Pericias.forEach(element => {
    criaTabela(element)
})


function criaTabela(element) {
    const value = Object.values(element);
    const novaPericia = document.createElement('tr');
    novaPericia.classList.add("Pericia")
    value.forEach(value => {
        const input = document.createElement('input');
        const newelement = document.createElement('td');
        const IsNumber = typeof value === 'number';
        const IsTipo = value === element.Tipo;
        if (IsTipo) {
            newelement.classList.add("Tipo")
            newelement.dataset.Type = `${value}`
        }
        if (IsNumber) {
            input.setAttribute("type", "number");
            newelement.appendChild(input);

        } else {
            newelement.innerHTML = value;
        }

        if (value === "Ofício") {
            newelement.classList.add("Oficio");
            input.classList.add("InputOficio")
            newelement.appendChild(input)
        }

        novaPericia.appendChild(newelement)
    });
    table.appendChild(novaPericia)
}

const atributos = document.querySelectorAll(".EventInputAtributo")

atributos.forEach(element => {
    element.addEventListener("change", calculationAtributo);
});


function calculationAtributo(e) {
    const targetinput = e.target;
    const getInputparent = targetinput.parentElement;
    const getTextChildren = getInputparent.childNodes[3].childNodes[1];
    let valorAtributo = e.target.value;
    let modificador = retornarModificadorCalculado(valorAtributo);
    getTextChildren.textContent = modificador < 0 ? `${modificador}` : `+${modificador}`
}
function retornarModificadorCalculado(valorAtributo) {
    let modificador = -5;
    return modificador += Math.floor(valorAtributo / 2);
}

calculationTotalPericia();

function calculationTotalPericia() {
    let pericia = document.querySelectorAll(".Pericia");
    pericia.forEach(newPericia => {
        newPericia.childNodes.forEach(children => {
            children.firstChild.addEventListener("change", Total);
        })

    });

}
function Total(e) {
    const targetinput = e.target;
    const getInputparent = targetinput.parentElement.parentElement;
    const Total = getInputparent.childNodes[1].firstChild;
    const nivel = getInputparent.childNodes[2].firstChild.value;
    const Atribute = AddAtribute(getInputparent.childNodes[3].firstChild.textContent)
    const Treino = getInputparent.childNodes[4].firstChild.value;
    const Outros = getInputparent.childNodes[5].firstChild.value;

    if (nivel !== "" && Treino !== "" && Outros !== "") {
        Total.value = Some(parseInt(nivel), parseInt(Atribute), parseInt(Treino), parseInt(Outros))
    }

}



function Some(nivel, AtributePoints, treino, outros) {
    return nivel + AtributePoints + treino + outros;
}

function AddAtribute(typeAtribit) {
    var AtributePoints;
    switch (typeAtribit) {
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

    return AtributePoints;
}