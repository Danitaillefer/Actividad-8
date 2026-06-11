const PostsModel = require('../models/posts.model');

const getAll = async (req, res) => {
    try{
        const posts = await PostsModel.selecAll();
        res.json(posts);
    }catch (error){
        res.status(500).json({
            message: 'Error al obtener los posts'
        });
    }
}; 

const getById = async (req, res) => {
    try{
        const post = await PostsModel.selectById(req.params.id);
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
        const nuevoPost = await PostsModel.selectById(result.insertID)
        if(!nuevoPost){
            res.status(404).json({
                message: 'No existe cliente con es ID'
            });
        }
        res.status(201).json(nuevoPost);
    }catch (error){
        res.status(500).json({
            message: 'Error al crear el post'
        })
    }
}