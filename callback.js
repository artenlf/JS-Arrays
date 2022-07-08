const nomes = ['João', 'Juliana', 'Ana', 'Caio']

nomes.forEach(imprimeNomes) // forEach só funciona se chamada uma function é um parâmetro obrigatório.

// mas pode colocar a função fora do bloco, por exemplo:

function imprimeNomes(nome) {
    console.log(nome)
}