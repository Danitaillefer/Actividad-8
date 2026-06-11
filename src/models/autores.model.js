const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query('SELECT * FROM autores');
    return result;
};

const selectById = async (id) => {
    const [result] = await db.query('SELECT * FROM autores WHERE id = ?', [id]);
    return result[0];
};

const insert = async ({ nombre, email, imagen }) => {
    const [result] = await db.query(`
        INSERT INTO autores (nombre, email, imagen)
        VALUES (?, ?, ?)
    `, [nombre, email, imagen]);
    return result;
};

module.exports = { selectAll, selectById, insert }