const listaDeChamada = ['João', 'Juliana', 'Ana', 'Caio', 'Gustavo', 'Bianca', 'Pedro', 'Eduarda', 'Mariana', 'Roberto', 'Bruno', 'Viviane', 'Janaína', 'Vitória', 'Marcos', 'Antônia', 'Natalia', 'Victor']

listaDeChamada.splice(2,2,'Rodrigo') // primeiro parâmetro o índice que deve começar a alterar a lista, o segundo parâmetro é o número de elementos a ser removido, e do terceiro em diante são os elementos a serem inseridos 

console.log(`Lista de Chamada: ${listaDeChamada}`)