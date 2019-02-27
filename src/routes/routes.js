module.exports = function(app, db) {

    //responder post em /entities
    app.post('/entities', (req, res) => {
        //vai para arq de log
        console.log(req.headers.host + ' request POST');
        //consulta se existe
        const resBd = db.get('entities').find({title: req.body.title}).value(); //
        if(resBd){
            res.status(200).send("existente");
        }else{
            db.get('entities').push({ title: req.body.title, type: req.body.type}).write();
            res.status(200).send('ok');
        }
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