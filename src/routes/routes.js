module.exports = function(app, db) {
    //responder post em /entities
    app.post('/entities', (req, res) => {
        console.log(req.body);
        console.log(req.body.type);
        console.log(req);
        db.get('entities').push({ title: req.body.title, type: req.body.type}).write()
        res.send('POST efetuado com sucesso');
    });

    //responder get em /entities
    app.get ('/entities', (req, res) => {
        //reconhecer query na uri
        var query = location.search.slice(1);
        var partes = query.split('&');
        var data = {};
        partes.forEach(function (parte) {
            var chaveValor = parte.split('=');
            var chave = chaveValor[0];
            var valor = chaveValor[1];
            data[chave] = valor;
        });

        console.log(data); // Object {title: "aqui o titulo", type: "aqui o tipo"}
        
        console.log(req.body);
        res.send('GET enviado');
    });

    app.get('/', (req, res) => {
        res.send('Hello World!/n send');
    });
};