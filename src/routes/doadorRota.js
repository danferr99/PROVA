const { Router, request } = require('express');
const doadorService = require('../services/doadorService');
const { validate } = require('../validations/validations');
const { DoadorValidationRules } = require('../validations/doadorValidations');


const routes = Router();



routes.post('/', DoadorValidationRules(), validate, (request, response) => {

    const { nomeDoador, cpf, nomeInstituicao , valorDoacao } = request.body;
    const novoDoador = {nomeDoador, cpf, nomeInstituicao , valorDoacao  };
    const DoadorRetorno = doadorService.regras(novoDoador);
     return response.status(201).json({ DoadorRetorno });

    });


    module.exports = routes;