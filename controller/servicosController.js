const servicoModel = require("../model/servicos");

exports.compilaListaServicos = (taxaDesconto) =>
  servicoModel.retornarListaServicos().map((item) => ({
    ...item,
    preco: item.preco * (1 - taxaDesconto),
  }));

exports.inserirItemServico = ({ id, desc, preco }) =>
  servicoModel.adicionarItemServico({ id, desc, preco });

exports.importarItensServico = (itensServicos) => {
  itensServicos.forEach((item) => {
    servicoModel.adicionarItemServico(item);
  });
};
