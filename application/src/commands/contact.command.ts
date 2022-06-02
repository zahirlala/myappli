import { Contact } from "@/domains/contact.interface";
import contactQuery from "@/query/contact.query";
export default {
    createContact(contact: Contact): void {
            const contacts: Array<Contact> = contactQuery.getContacts();
            contacts.push(contact);            
            localStorage.setItem('contact',JSON.stringify(contacts));
        return 
    },

    deleteContact(contactIndex: number) {
            const listContact = JSON.parse(localStorage.getItem('contact') as string);
            const newListContact: Array<Contact> = [];
            let i = 0;
            for (const [key,value] of Object.entries(listContact)) {
                console.log(value);
                if (contactIndex != i){
                    newListContact.push(value as Contact);
                }
                i = ++i;
                }
            localStorage.setItem('contact',JSON.stringify(newListContact));
        return
    }
}