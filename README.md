#Hello JusBrasil

## Sobre a API

Foi construida utilizando o node que trata requisições de maneira legal sem bloqueios :) .
Meu bd para salvar as requisições é o lowdb, o escolhi para a aplicação rodar apenas na cli, pode (e deve) ser substituida por qualquer banco de dados.
A aplicação está escutando na porta 8080
<code>localhost:8080</code>

## Para executar:
$ npm run dev
ou:
$ node index.js

## Para as requisições:
POST:
<code>$ curl --data "title=UmTituloAqui&type=UmTipoAqui" localhost:8080/entities</code>

GET:
<code>$ curl -XGET localhost:8080/entities/?q=som</code>

## O desafio:

### 1) Indexar um item:
Req: Sua API deve permitir que novos itens sejam adicionados (indexados) através do seguinte endpoint:
<code>curl -X POST http://my-search-engine/entities -d '{"title": "Some title", "type": "TOPIC"}'</code>

Res: Feito sengundo a documentação do curl <code>man curl</code> que informa: <code>curl --data</code> para efetuar POST.
<code>$ curl --data "title=UmTituloAqui&type=UmTipoAqui" localhost:8080/entities</code>

### 2) Buscar um item após indexá-lo:
Req: Sua API deve permitir que itens indexados sejam buscados através do seguinte endpoint:
<code>curl -XGET http://my-search-engine/entities/?q=som</code>

Res: Funcionando...
<code>$ curl -XGET localhost:8080/entities/?q=titulo</code>