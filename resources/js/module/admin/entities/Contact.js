export default class Contact {
    constructor({ phone = '', email = '', address = '', contactPerson = '' } = {}) {
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.contactPerson = contactPerson;
    }
}
