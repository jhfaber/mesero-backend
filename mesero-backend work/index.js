const express = require('express');
const bodyParser = require('body-parser');

const plato = require('./api/plato.service');
const cliente = require('./api/cliente.service');
const consumo = require('./api/consumo.service');
const usuario = require('./api/usuario.service');
const tienda = require('./api/tienda.service');
const cors = require('cors');

const app = express();
app.use(cors());

//Primero los middlewares de bodyParser, luego los de service
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/plato', plato);
app.use('/cliente', cliente);
app.use('/consumo', consumo);
app.use('/usuario', usuario);
app.use('/tienda', tienda);

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
