const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories');
    return rows;
  }

  async store({ name }) {
    const [row] = await db.query(`
    INSERT INTO categories(name)
    VALUES ($1)
    RETURNING *
    `, [name]);
    return row;
  }
}

module.exports = new CategoriesRepository();
