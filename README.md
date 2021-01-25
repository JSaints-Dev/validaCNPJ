# Validação de CNPJ

Esta é uma função valida um documento CNPJ e retorna `true` se verdadeiro e `false` se falso.

O CNPJ é um número formado por 14 dígitos dos quais os dois últimos são chamados de dígitos verificadores (DV). Cada DV é calculado com base nos dígitos anteriores e juntos servem para validar o número do CNPJ como um todo. Assim, torna-se importante quando um número de CNPJ é digitado pelo usuário final em uma aplicação utilizar o método isCNPJ(), implementado no pacote "meuPacote" apresentado na Listagem 1, para verificar se o número informado está correto evitando, por exemplo, o cadastro de CNPJs inválidos.

Para exemplificar o algoritmo de verificação do CNPJ será utilizado como exemplo o CNPJ número __14.572.457.0001-85__.

O cálculo dos DVs é executado em duas etapas usando para isto o módulo de divisão 11 (módulo de divisão é a parte inteira do resultado de uma divisão).

### Para calcular o 1º dígito verificador:
1. Cada um dos doze primeiros números do CNPJ, a partir do 12º número até o 1º, é multiplicado por um peso que começa de 2 e que vai sendo incrementado de 1 a cada passo, somando-se as parcelas calculadas. Sempre que o peso atingir o valor 10 ele deve novamente receber o valor inicial 2:

1|0|0|0|7|5|4|2|7|5|4|1|-
-|-|-|-|-|-|-|-|-|-|-|-|-:
x|x|x|x|x|x|x|x|x|x|x|x|-
2|3|4|5|6|7|8|9|2|3|4|5|-
2|0|0|0|42|35|32|18|14|15|16|5|= 179

2. Calcula-se o dígito através da seguinte expressão:
* 179 % 11 = 3

__Atenção:__ se o resto da divisão (operador %) calculado for 0 ou 1, o dígito verificador será 0; nos outros casos, o dígito verificador é definido pela expressão: 11 - 3 = 8!

### Para calcular o 2º dígito verificador:
1. Cada um dos treze primeiros números do CNPJ, a partir do primeiro DV (13º número) até o 1º, é multiplicado por um peso que começa de 2 e que vai sendo incrementado de 1 a cada passo, somando-se as parcelas calculadas. Sempre que o peso atingir o valor 10 ele deve novamente receber o valor inicial 2:

8|1|0|0|0|7|5|4|2|7|5|4|1|-
-|-|-|-|-|-|-|-|-|-|-|-|-|-:
x|x|x|x|x|x|x|x|x|x|x|x|x|-
2|3|4|5|6|7|8|9|2|3|4|5|6|-
16|3|0|0|0|49|40|36|4|21|20|20|6|= 215

2. Calcula-se o dígito através da seguinte expressão:
* 215 % 11 = 6

__Atenção:__ se o resto da divisão (operador %) calculado for 0 ou 1, o dígito verificador será 0; nos outros casos, o dígito verificador é definido pela expressão: 11 - 6 = 5!
