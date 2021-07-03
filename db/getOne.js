const getAll = require('./getAll');

const getOne = async id => {
  try {
    const contacts = await getAll();
    const findContact = contacts.find(item => item.id === id);
    if (!findContact) {
      throw new Error('Id incorrect');
    }
    return findContact;
  } catch (error) {
    throw error;
  }
};

module.exports = getOne;
