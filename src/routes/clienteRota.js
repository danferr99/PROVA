const { Router, request } = require('express');
const clienteService = require('../services/clienteService');
const { validate } = require('../validations/validations');
const { ClienteValidationRules } = require('../validations/clienteValidations');


const routes = Router();



routes.post('/', ClienteValidationRules(), validate, (request, response) => {

    const { nome, cpf, idade , salarioBruto, qtdeDependentes, empregado, tempoDeAtuacao, restSerasa, classificacaoCliente  } = request.body;
    const novoCliente = {nome, cpf, idade , salarioBruto, qtdeDependentes, empregado, tempoDeAtuacao, restSerasa, classificacaoCliente };
    const ClienteRetorno = clienteService.regrasCredito(novoCliente);
   return response.status(201).json({ ClienteRetorno });

    });


    module.exports = routes;