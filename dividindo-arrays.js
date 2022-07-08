const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Gustavo', 'Bianca', 'Pedro', 'Eduarda', 'Mariana', 'Roberto', 'Bruno', 'Viviane', 'Janaína', 'Vitória', 'Marcos', 'Antônia', 'Natalia', 'Victor']

nomes.pop() // Victor trocou de escola na última semana de julho
nomes.push('Theodoro') // Theodoro fez matrícula na primeira semana de agosto

// como estamos trabalhando com const, deve passar pop e push antes das linhas abaixo.

console.log("Número de Alunos matrículados:", nomes.length)
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)


console.log(`Alunos da Sala 1: ${sala1}`)
console.log(`Alunos da Sala 2: ${sala2}`)