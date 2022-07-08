const notas = [10, 9, 8 , 7, 6]

// o metodo map retorna uma array atualizada

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota) // o operador ++ precisa vir antes da variável para que seja feita o incremento correto da varíavel dentro da array.

console.log(notasAtualizadas)