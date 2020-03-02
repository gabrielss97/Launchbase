const programador = {
    nome:"Gabriel",
    idade:22,
    tecnologias:[
        {
            nome:"Javascript",
            especialidade: "Web"
        },
        {
            nome:"C++",
            especialidade:"Desktop"
        },
        {
            nome:"Java",
            especialidade:"Mobile"
        }
    ]
}

console.log(`O usuario ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
