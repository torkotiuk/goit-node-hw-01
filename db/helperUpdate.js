const fs = require('fs').promises;
const contactsFile = require('./helperPath');

const helperUpdate = async array => {
  const str = JSON.stringify(array);
  try {
    await fs.writeFile(contactsFile, str);
  } catch (error) {
    throw error;
  }
};

module.exports = helperUpdate;
