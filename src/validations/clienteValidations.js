const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../validations/cpfValidations");

const ClienteValidationRules = () => {
  return [
    body("Idade").notEmpty().withMessage("INFORME A IDADE!"),
    body("Idade").isFloat({min:15,max:Infinity}).withMessage("IDADE NÃO PODE SER MENOR QUE 16"),
    body("CPF").notEmpty().withMessage("CPF obrigatório"),
    body("CPF")
    .custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF É inválido!");
      return true;
    })
    .withMessage("CPF inválido"),
    body("SalarioBruto").notEmpty().withMessage("INFORME O SALÁRIO"),
    body("SalarioBruto").isFloat({min:0, max:Infinity}).withMessage("SALÁRIO MAIOR OU IGUAL A 0"),
    body("QtdeDependentes").isFloat({min:0,max:Infinity}).withMessage("DEPENDENTES MAIOR OU IGUAL A 0")
  ];
};

module.exports = {
  ClienteValidationRules,
};
