/* import fs from 'fs'; */
/* import path from 'path'; */

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join( __dirname, 'db', 'contacts.json');

// TODO: задокументувати кожну функцію

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
    const data = await listContacts();
    const result = data.find(contact => contact.id === contactId);
    return result || null;
};

const addContact = async (name, email, phone) => {
  // ...твій код
};

/* function removeContact(contactId) {
  // ...твій код
}
 */


module.exports = {listContacts,getContactById,};