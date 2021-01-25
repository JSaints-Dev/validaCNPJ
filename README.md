#Validação de CNPJ

Esta é uma função valida um documento CNPJ e retorna `true` se verdadeiro e `false` se falso.

O CNPJ é um número formado por 14 dígitos dos quais os dois últimos são chamados de dígitos verificadores (DV). Cada DV é calculado com base nos dígitos anteriores e juntos servem para validar o número do CNPJ como um todo. Assim, torna-se importante quando um número de CNPJ é digitado pelo usuário final em uma aplicação utilizar o método isCNPJ(), implementado no pacote "meuPacote" apresentado na Listagem 1, para verificar se o número informado está correto evitando, por exemplo, o cadastro de CNPJs inválidos.

Para exemplificar o algoritmo de verificação do CNPJ será utilizado como exemplo o CNPJ número 14.572.457.0001-85.
