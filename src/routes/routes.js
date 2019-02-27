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
        //log  ;
        console.log(req.headers.host + ' request GET: ' + req.query.q);
        //cpnsulta se exxiste
        const resBd = db.get('entities').find({title: req.query.q}).value();
        if(resBd){
            res.status(200).send({
                title: resBd.title,
                type: resBd.type
            })
        }else{
            res.status(200).send({});
        }
    });

    app.get('/', (req, res) => {
        res.send('Hello World!/n send');
    });
};