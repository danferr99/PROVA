const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../validations/cpfValidations");

const DoadorValidationRules = () => {
  return [
    body("nomeDoador").notEmpty().withMessage("Porfavor, informe o seu nome!!"),
    body("valorDoacao").isFloat({ min: 10, max: Infinity}).withMessage("VALOR MÍNIMO PARA DOAÇÃO = 1O REAIS"),
    body("nomeInstituicao").notEmpty().withMessage("Porfavor, informe o nome da instituição!!"),
    body("cpf")
    .custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF É inválido!");
      return true;
    })
    .withMessage("CPF inválido"),
   
  ];
};

module.exports = {
  DoadorValidationRules,
};
