import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';

import USER_NAME from '@salesforce/schema/User.Name';
import USER_EMAIL from '@salesforce/schema/User.Email';

const fields = [USER_NAME, USER_EMAIL];

export default class WireUserDetails extends LightningElement {
    userId = Id; 
    userDetailsResponse;
    userDetails;

    // Syntax:
    // @wire(adapter, { adapterConfig })
    // property or function to store the response

    // Using function
    @wire(getRecord, { recordId: '$userId', fields: fields })
    userDetailsHandler({ data, error }) {
        if (data) {
            this.userDetailsResponse = data.fields;
        }
        if (error) {
            console.error(error);
        }
    }

    // Using property
    @wire(getRecord, { recordId: '$userId', fields: ['User.Name', 'User.Email'] })
    userDetails;
}
