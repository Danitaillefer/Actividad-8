const PostsModel = require('../models/posts.model');

const getAll = async (req, res) => {
    try{
        const posts = await PostsModel.selectAll();
        res.json(posts);
    }catch (error){
        console.log("🚨 ERROR REAL EN GET ALL:", error);
        res.status(500).json({
            message: 'Error al obtener los posts'
        });
    }
}; 

const getById = async (req, res) => {
    try{
        console.log('ID recibido:', req.params.id);
        const post = await PostsModel.selectById(req.params.id);
        console.log('Post encontrado' , post)
        if(!post){
            return res.status(404).json({
                message: 'Post no encontrado'
            });
        }
        res.json(post);
    }catch (error){
        res.status(500).json({
            message: 'Error al obtener el post'
        });
    }
};

const create = async (req, res) => {
    try{
        const result = await PostsModel.insert(req.body);
        const nuevoPost = await PostsModel.selectById(result.insertId)
        if(!nuevoPost){
            res.status(404).json({
                message: 'No existe post con es ID'
            });
        }
        res.status(201).json(nuevoPost);
    }catch (error){
        res.status(500).json({
            message: 'Error al crear el post'
        })
    }
};

const getAutorById = async (req, res) => {
    try{
        const posts = await PostsModel.selectByAutorId(req.params.id);
        if(!posts.length){
            return res.status(404).json({
                message: ' No se ha encontrado posts para este autor'
            });
        }
        res.json(posts);
    }catch (error){
        res.status(500).json({
            message: 'Hay un error'
        });
    }
};

module.exports = {
    getAll, getById, create, getAutorById
}