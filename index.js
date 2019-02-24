//inicia o express
const express = require('express');
const app = express();

//ferramenta para facilitar a leitura de .json
const bodyParser = require('body-parser');

//inicia o low db para salvar os dados localmente em um arquivo .json
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('./src/assets/db.json');

//porta em que vou escutar
const port = 8080;

//a ferramenta para a fácil leitura de json
//app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

low(adapter)
    .then(db => require('./src/routes')(app, db) ) //as rotas: require('./src/routes')(app, db);
    .then(() => {
        //iniciar a escuta na porta
        app.listen(port, ()=>{
            console.log("Estamos escutando na porta: "+port);
        })
    })

/////////////////////////
/*
low(adapter)
  .then(db => {
    // Routes
    // GET /posts/:id
    app.get('/posts/:id', (req, res) => {
      const post = db.get('posts')
        .find({ id: req.params.id })
        .value()

      res.send(post)
    })

    // POST /posts
    app.post('/posts', (req, res) => {
      db.get('posts')
        .push(req.body)
        .last()
        .assign({ id: Date.now().toString() })
        .write()
        .then(post => res.send(post))
    })

    // Set db default values
    return db.defaults({ posts: [] }).write()
  })
  .then(() => {
    app.listen(3000, () => console.log('listening on port 3000'))
  })
*/
