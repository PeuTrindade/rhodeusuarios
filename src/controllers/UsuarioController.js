const { findById } = require('../model/Usuario');
const Usuario = require('../model/Usuario');

module.exports = {
    async index(req,res){
        const usuarios = await Usuario.find()
        res.json(usuarios);
    },
    async store(req,res){
        const {nome,senha,email,imagem} = req.body;
        let dataCreate = {};
        dataCreate = {
            nome,senha,email,imagem
        }
        const usuarios = await Usuario.create(dataCreate)
        res.json(usuarios);
    },
    async detail(req,res){
        const { email } = req.params;
        const usuarios = await Usuario.findOne({email});
        res.json(usuarios);
    }
}