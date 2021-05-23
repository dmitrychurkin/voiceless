import ActionRegistry from "../ActionRegistry";
import api from '../Api';

export default class ContactForm {
    static get endpointUri() {
        return '/api/contacts';
    }

    constructor(actionRegistry = new ActionRegistry()) {
        this._actionRegistry = actionRegistry;
        this._submitter = null;
    }

    init() {
        this._actionRegistry.setHandlers({
            type: 'submit',
            useClosestWrapper: false,
            handler: this.submitForm.bind(this)
        });

        this._actionRegistry.setHandlers({
            selector: '.contacts_form',
            type: 'formdata',
            handler: this.sendRequest.bind(this)
        });
    }

    submitForm(e) {
        e.preventDefault();
        e.submitter.disabled = true;

        this._submitter = e.submitter;

        if (e.isTrusted) {
            new FormData(e.target);
        }
    }

    async sendRequest({ target, formData }) {
        try {
            const response = await api(ContactForm.endpointUri, {
                method: 'post',
                body: formData
            });

            const responseData = await response.json();

            if (response.ok) {
                target.reset();
                return alertify.success(responseData.message);
            }

            responseData
                .errors
                .message
                .forEach((errorMessage, index) => {
                setTimeout(() => {
                    alertify.error(
                        `${responseData.message}
                        ${errorMessage}`
                    );
                }, index * 1000);
            });
        }catch {
            alertify.error('Error occured, while sending message');
        }finally {
            this._submitter.disabled = false;
        }
    }
}