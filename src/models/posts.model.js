const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query(`
        SELECT posts.*, autores.nombre, autores.email, autores.imagen
        FROM posts
        JOIN autores ON posts.autor_id = autores.id
        `);
        return result;
};

const selectById = async (id) => {
    const [result] = await db.query(`
        SELECT posts.* , autores.nombre, autores.email, autores.imagen
        FROM posts
        JOIN autores ON posts.autor_id = autores.id
        WHERE posts.id = ?
        `, [id]);
    return result[0];
};

const insert = async ({titulo, descripcion, categoria, autor_id}) => {
    const [result] = await db.query(`
        INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id)
        VALUES (?, ?, NOW(), ?, ?)
        `, [titulo, descripcion, categoria, autor_id]);
    return result;
};

const selectByAutorId = async (autorId) => {
    const [result] = await db.query(`
    SELECT posts.*, autores.nombre, autores.email, autores.imagen
    FROM posts
    JOIN autores ON posts.autor_id = autores.id
    WHERE autores.id = ?
    `, [autorId]);
    return result;
} 

module.exports = {
    selectAll, selectById, insert, selectByAutorId
}