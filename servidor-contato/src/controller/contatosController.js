const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) => {
  let contato = request.body
  contato.id = Math.random().toString(36).substr(-8)
  model.agenda.contatos.push(contato)
  response.status(200).send()
}

const compararAdd = (request, response) => {
  
  const dado = model.contatos.findindex(dado => request.agenda.nome == request.body.nome)

  if (dado == true) {
    return response.status(500).send(dado)

  } else {
  
    require.body.id = Math.random().toString(36).substr(-8)
    model.agenda.contatos.push(require.body)

    return response.status(200).send(dado)
  }
}

module.exports = {
  getAll,
  compararAdd,
  add
}