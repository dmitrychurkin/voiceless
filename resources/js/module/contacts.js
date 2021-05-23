import Boot from '../lib/Boot';
import ContactForm from '../lib/ContactForm';

new class extends Boot {
    constructor() {
        super(new ContactForm);
    }
}