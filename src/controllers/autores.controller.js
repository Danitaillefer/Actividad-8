const AutoresModel = require('../models/autores.model');

const getAll = async (req, res) => {
    try{
        const autores = await AutoresModel.selectAll();
        res.json(autores);
    }catch (error){
        res.status(500).json({
            message: 'Error al obtener los autores'
        });
    }
}; 

const getById = async (req, res) => {
    try{
        const autor = await AutoresModel.selectById(req.params.id);
        if(!autor){
            return res.status(404).json({
                message: 'Autor no encontrado'
            });
        }
        res.json(autor);
    }catch (error){
        res.status(500).json({
            message: 'Error al obtener el autor'
        });
    }
};

const create = async (req, res) => {
    try{
        const result = await AutoresModel.insert(req.body);
        const nuevoAutor = await AutoresModel.selectById(result.insertID)
        if(!nuevoAutor){
            res.status(404).json({
                message: 'No existe autor con es ID'
            });
        }
        res.status(201).json(nuevoAutor);
    }catch (error){
        res.status(500).json({
            message: 'Error al crear el autor'
        })
    }
};

module.exports = {
    getAll, getById, create
}