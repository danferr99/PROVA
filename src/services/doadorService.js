module.exports.regras = function(novoDoador) { 
      
      
      var retorno
        
      if(novoDoador.valorDoacao == 10){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 10% nas lojas xpto. Código do brinde de desconto é ${this.brinde(novoDoador)}`
           }
    }
   else if(novoDoador.valorDoacao == 20){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 20% nas lojas xpto. Código do brinde de desconto é ${this.brinde(novoDoador)}`
           }
    }
            
   else if(novoDoador.valorDoacao == 50){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 30% nas lojas xpto. Código do brinde de desconto é ${this.brinde(novoDoador)}`
           }
    }
   else if(novoDoador.valorDoacao >=100){
        retorno = {
            "mensagem" : "Obrigado pela sua doação!",
            "brinde" : `Você ganhou um vale desconto de 50% nas lojas xpto. Código do brinde de desconto é ${this.brinde(novoDoador)}`
           }
    }
       
        return retorno;
    };
    
    
    
    module.exports.brinde = (novoDoador) => {
        var a = ""
        return a.concat(Math.floor(Math.random() * 9999) + 1001,novoDoador.CPF,Math.floor(Math.random() * 99999) + 10000); 
    }; 
    
    
   