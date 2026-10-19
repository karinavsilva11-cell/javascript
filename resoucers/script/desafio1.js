
  let senha = "123";
  let tentativa=3;
  let senhatentat = prompt("PARA ACESSAR E NECESSARIO UMA SENHA:");
  while(tentativa >0){
    

            if (senha.trim().toLowerCase()===senha.toLocaleLowerCase().trim()) {
                alert("SENHA CORRETA! \n ACESSO PERMITIDO"); 
            
               
            }

            
                else {
                    let = tentativa=tentativa-1;
                    alert("SENHA INCORRETA! \n  ACESSO NEGADO" + tentativa);
                    let die =tentativa >0?"numero de tentativas".concat(tentativa):"acesso negado"

                }
                if(die!= "acesso negado"&& tentativa !=0){
                    alert("senha incorreta,".concat(die));
                    senhatentat=prompt("digite a sua senha");
                }
            }
