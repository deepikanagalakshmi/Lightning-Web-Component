import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class RecordForm extends LightningElement {

    //available only in the RecordPage and not in AppPage
    @api recordId;
    @api objectApiName;

    objectName = ACCOUNT_OBJECT;
    fieldList = [NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELD, REVENUE_FIELD]; //lighting-record-from takes fields in form of array

    handleSuccess(event){
        console.log(event.detail.id);
        const toastSuccess = new ShowToastEvent({
            title: 'Account Created',
            message: 'Record ID: ' + event.detail.id, //Record ID: 001JX00000sv4OkYAI
            variant: 'success'
        })
        this.dispatchEvent(toastSuccess);
        
    }
}