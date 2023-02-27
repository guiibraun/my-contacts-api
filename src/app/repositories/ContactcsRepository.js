const { uuid } = require('uuidv4');

const contacts = [{
  id: uuid(),
  name: 'Guilherme',
  email: 'guiabraun@hotmail.com',
  category_id: uuid(),
}];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
