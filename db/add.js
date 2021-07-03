const { v4 } = require('uuid');
const getAll = require('./getAll');
const helperUpdate = require('./helperUpdate');

const add = async obj => {
  const newContact = { ...obj, id: v4() };
  try {
    const contacts = await getAll();
    const newArray = [...contacts, newContact];
    await helperUpdate(newArray);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = add;
