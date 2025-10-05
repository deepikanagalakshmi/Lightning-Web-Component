import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';

export default class RecordEditForm extends LightningElement {
    objectName = CONTACT_OBJECT;

    recordID = "003JX00000qFLGwYAO";

    fieldList = {
        accountField: ACCOUNT_FIELD,
        nameField: NAME_FIELD,
        emailField: EMAIL_FIELD,
        phoneField: PHONE_FIELD,
        titleField: TITLE_FIELD
    };

    // Reset all input fields to their original values
    handleReset() {
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if (inputFields) {
            Array.from(inputFields).forEach(field => {
                field.reset();
            });
        }
    }
}
