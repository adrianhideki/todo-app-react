const Todo = require('./todo')

//métodos da aplicação
Todo.methods(['get','post','put','delete'])
//Ajustando o update para retornar o registro atualizado e aplicar as validações
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo