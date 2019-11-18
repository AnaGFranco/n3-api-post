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
  let contato = request.body
  let baseDados = model.agenda.contatos
  contato.id = Math.random().toString(36).substr(-8)

  if (!contato.nome || !contato.dataNascimento || !contato.celular) {
    response.status(400).send("Dados inválidos");
  } else {
    if (baseDados.find(dado => dado.nome === contato.nome)) {
      response.status(400).send("Contato já cadastrado")
    } else {
      model.agenda.contatos.push(contato)
      response.status(201).send(verificarSigno(contato.dataNascimento))
    }
  }
}


function verificarSigno(data) {

  const dataNasc = new Date(
    data.split("/")[2],
    data.split("/")[1],
    data.split("/")[0]
  )
  
  if (dataNasc >= (new Date(dataNasc.getFullYear(),2,21)) && dataNasc <= (new Date(dataNasc.getFullYear(),3,19))) {
    return "Áries"
  } else if (dataNasc >= (new Date(dataNasc.getFullYear(),4,20)) && dataNasc <= (new Date(dataNasc.getFullYear(),5,20))) {
    return "Touro"
  }else if (dataNasc >= (new Date(dataNasc.getFullYear(),5,21)) && dataNasc <= (new Date(dataNasc.getFullYear(),6,21))) {
    return "Gêmeos"
  }else if (dataNasc >= (new Date(dataNasc.getFullYear(),6,22)) && dataNasc <= (new Date(dataNasc.getFullYear(),7,22))) {
    return "Câncer"
  }else if (dataNasc >= (new Date(dataNasc.getFullYear(),7,23)) && dataNasc <= (new Date(dataNasc.getFullYear(),8,22))) {
    return "Leão"
  }else if (dataNasc >= (new Date(dataNasc.getFullYear(),8,23)) && dataNasc <= (new Date(dataNasc.getFullYear(),9,22))) {
    return "Virgem"
  }else if (dataNasc >= (new Date(dataNasc.getFullYear(),9,23)) && dataNasc <= (new Date(dataNasc.getFullYear(),10,22))) {
    return "Libra"
  }else if (dataNasc >= (new Date(dataNasc.getFullYear(),10,23)) && dataNasc <= (new Date(dataNasc.getFullYear(),11,21))) {
    return "Escorpião"
  }else if (dataNasc >= (new Date(dataNasc.getFullYear(),11,22)) && dataNasc <= (new Date(dataNasc.getFullYear(),12,21))) {
    return "Sagitario"
  }else if (dataNasc >= (new Date(dataNasc.getFullYear(),12,22)) && dataNasc <= (new Date(dataNasc.getFullYear(),1,19))) {
    return "Capricórnio"
  }else if (dataNasc >= (new Date(dataNasc.getFullYear(),1,20)) && dataNasc <= (new Date(dataNasc.getFullYear(),2,18))) {
    return "Aquário"
  }else{
    return "Peixes"
  }
}

// Áries: de 21 março a 19 abril
// Touro: de 20 abril a 20 maio
// Gêmeos: de 21 maio a 21 junho
// Câncer: de 22 junho a 22 julho
// Leão: de 23 julho a 22 agosto
// Virgem: de 23 agosto a 22 setembro
// Libra:  de 23 setembro a 22 outubro
// Escorpião: de 23 outubro a 21 novembro
// Sagitário: de 22 novembro a 21 dezembro
// Capricórnio: de 22 dezembro a 19 janeiro
// Aquário: de 20 janeiro a 18 fevereiro
// Peixes: de 19 fevereiro a 20 março


module.exports = {
  getAll,
  compararAdd,
  add
}
