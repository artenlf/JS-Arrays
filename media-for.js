const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}
// a cada vez que passa pelo for, ele soma uma nota do indice e armazena na variável somaDasNotas.

let media = somaDasNotas/notas.length

console.log(media)