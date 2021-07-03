const fs = require('fs').promises;
const contactsFile = require('./helperPath');

const getAll = async () => {
  try {
    const data = await fs.readFile(contactsFile);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    error.message = `Can't read a contacts file`;
    throw error;
  }
};

module.exports = getAll;
