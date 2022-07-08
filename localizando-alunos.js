const alunos = ['João', 'Juliana', 'Ana', 'Caio']

const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeENota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ' , sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado."
    }
}

// includes retorna --> boolean
//indexOf retorna e armazena --> número (posição da array) 

console.log(exibeNomeENota('Ana'))