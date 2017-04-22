# Consulta CEP
[ JavaScript ] Pequena source para requisição de informações de um CEP. Os dados são fornecidos pela API [viacep.com.br]: https://viacep.com.br/.

## Como Utilizar?
Bem, é super simples, basta seguir os exemplos abaixo:

### Obtendo lista de retornos possíveis.
'''javascript
console.log(ConsultaCEP.ResponseTypeList);
'''

### Definindo tipo de retornos
'''javascript
ConsultaCEP.ResponseType = 'tipo_de_retorno';
'''

### Obter tipo de retorno atual
'''javascript
console.log(ConsultaCEP.ResponseType);
'''


### Obter e armazenar dados de um array de CEPs
'''javascript
ArrCeps = ['12345678','00000000','22525658'];
r = ConsultaCEP.ConsultarCeps().CEPS();
'''

### Retorno JSON
'''json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "unidade": "",
  "ibge": "3550308",
  "gia": "1004"
}
'''

### Retorno XML
'''xml
<xmlcep>
<cep>01001-000</cep>
<logradouro>Praça da Sé</logradouro>
<complemento>lado ímpar</complemento>
<bairro>Sé</bairro>
<localidade>São Paulo</localidade>
<uf>SP</uf>
<unidade/>
<ibge>3550308</ibge>
<gia>1004</gia>
</xmlcep>
'''

### Observação
É possível obter retornos em JSONP modificando a ResponseType para : json/?callback=nome_do_seu_callback
Também em unicode:  json/unicode/?callback=nome_do_seu_callback

