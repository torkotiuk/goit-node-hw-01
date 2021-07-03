const contacts = require('./db');
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contacts.getAll();
      console.log('Array of contacts >>>', allContacts);
      break;
    case 'get':
      const oneContact = await contacts.getOne(id);
      console.log(oneContact);
      break;

    case 'add':
      const newContact = {
        name: argv.name,
        email: argv.email,
        phone: argv.phone,
      };
      const resultNewContact = await contacts.add(newContact);
      break;

    case 'remove':
      await contacts.del(id);
      break;

    default:
      console.warn(' Unknown action type!');
  }
}
invokeAction(argv);
