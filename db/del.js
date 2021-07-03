const getAll = require('./getAll');
const helperUpdate = require('./helperUpdate');

const del = async id => {
  try {
    const contacts = await getAll();

    const index = contacts.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Id incorrect');
    }

    const filteredContacts = contacts.filter(item => item.id !== id);
    await helperUpdate(filteredContacts);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = del;
