const fs = require("fs").promises;
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, 'db', 'contacts.json');


const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
    const contacts = await listContacts();
  const contact = contacts.find(contact => contact.id === contactId);
    console.log(contact);
    return contact || null;
};

const addContact = async (name, email, phone ) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  console.log(newContact);
  return newContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts(); 
  const index = contacts.findIndex(contact => contact.id === contactId);
  if (index === -1) {
    return null;
  };
  const result = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  console.log(result);
  return result;
};



module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};