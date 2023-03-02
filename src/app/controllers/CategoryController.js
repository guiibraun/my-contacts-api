const CategoryRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await CategoryRepository.findById(id);

    if (!contact) {
      return response.status(400).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoryRepository.store({ name });
    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return response.stauts(400).json({ error: 'Category not found' });
    }

    const category = await CategoryRepository.update(id, name);

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoryRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
