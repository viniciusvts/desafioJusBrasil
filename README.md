#Hello JusBrasil

## Sobre a API

Foi construida utilizando o node que trata requisições de maneira legal sem bloqueios :) .
Meu bd para salvar as requisições é o lowdb para a aplicação funcionar na cli, podendo ser substituida por qualquer db.
Substitui a porta de escuta pela 8080 então a requisição tem de ser por lá ou troca de porta :).

## Para executar:
$ npm run dev
ou:
$ node index.js

## Para requisitar:
POST:
<code>$ curl -X POST localhost:8080 -d '{"title": "Some title", "type": "TOPIC"}'</code>

GET:
<code>$ curl -XGET localhost:8080/entities/?q=som</code>

## O desafio:

### 1) Indexar um item:
Req: Sua API deve permitir que novos itens sejam adicionados (indexados) através do seguinte endpoint:
<code>curl -X POST http://my-search-engine/entities -d '{"title": "Some title", "type": "TOPIC"}'</code>

Res: como falei, mudei apenas a porta:
<code>$ curl -X POST localhost:8080 -d '{"title": "Some title", "type": "TOPIC"}'</code>

### 2) Buscar um item após indexá-lo:
Req: Sua API deve permitir que itens indexados sejam buscados através do seguinte endpoint:
<code>curl -XGET http://my-search-engine/entities/?q=som</code>

Res: mais uma vez mudei a porta
<code>$ curl -XGET localhost:8080/entities/?q=som</code>