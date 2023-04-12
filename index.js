/* import listContacts  from './contacts.js'; */

/* const { Command } = require("commander"); */
const db = require("./db");

/* const program = new Command(); */

/* program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv); */

/* const argv = program.opts(); */

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await db.listContacts();
            return console.log(allContacts);
           /*  break; */

        case "get":
        const oneContact = await db.getContactById(id);
        return console.log(oneContact);
          /* break; */
    
      case "add":
        const otherContact = await db.addContact({ name, email, phone });
        return console.log(otherContact);
          /* break; */
    
        case "remove":
          // ... id
          /* break; */
    
        /* default:
          console.warn("\x1B[31m Unknown action type!"); */
    }
};

/* invokeAction(argv); */
invokeAction({ action: "list"});


   