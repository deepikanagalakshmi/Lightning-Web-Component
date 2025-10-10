import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_PICKLIST from '@salesforce/schema/Account.Industry';
import TYPE_PICKLIST from '@salesforce/schema/Account.Type';

export default class GetPicklistValues extends LightningElement {

    // Industry picklist
    selectedIndustry = '';
    industryOptions = [];

    // Type picklist
    typeSelected = '';
    typeOptions = [];

    // Get Account Object Info
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    // Get Industry picklist values
    @wire(getPicklistValues, {
        recordTypeId: '$objectInfo.data.defaultRecordTypeId',
        fieldApiName: INDUSTRY_PICKLIST
    })
    industryPicklist({ data, error }) {
        if (data) {
            this.industryOptions = [...this.generatePicklistOptions(data)];
            console.log('Industry picklist data:', data);
        }
        if (error) {
            console.log('Industry picklist error:', error);
        }
    }

    // Get Type picklist values
    @wire(getPicklistValues, {
        recordTypeId: '$objectInfo.data.defaultRecordTypeId',
        fieldApiName: TYPE_PICKLIST
    })
    typePicklist({ data, error }) {
        if (data) {
            this.typeOptions = [...this.generatePicklistOptions(data)];
            console.log('Type picklist data:', data);
        }
        if (error) {
            console.log('Type picklist error:', error);
        }
    }

    // Generate picklist options
    generatePicklistOptions(data) {
        return data.values.map(item => ({
            label: item.label,
            value: item.value
        }));
    }

    // Handle Industry change
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    // Handle Type change
    handleTypeChange(event) {
        this.typeSelected = event.detail.value;
    }
}
