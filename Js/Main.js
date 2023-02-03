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
    value.forEach(value => {
        const input = document.createElement('input');
        const newelement = document.createElement('td');
        const IsNumber = typeof value === 'number';
        const IsTipo = value === element.Tipo;
        if(IsTipo){
        newelement.classList.add("Tipo")
        }
        if (IsNumber) {
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
