const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    imagem: String,
});

const usuario = mongoose.model('Usuario',DataSchema);
module.exports = usuario;