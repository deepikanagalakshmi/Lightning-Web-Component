import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class GetObjectInfo extends LightningElement {

    // Variables for getObjectInfo
    firstChildObjectName;
    defaultRecordTypeId;

    // getObjectInfo adapter
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo({ data, error }) {
        if (data) {
            this.defaultRecordTypeId = data.defaultRecordTypeId;
            this.firstChildObjectName = data.childRelationships[0].childObjectApiName;
        }
        if (error) {
            console.log('Error:', error);
        }
    }

    // Variables for getObjectInfos
    objectApis = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];
    objectApiInfosResponse;

    // getObjectInfos adapter
    @wire(getObjectInfos, { objectApiNames: '$objectApis' })
    objectInfos({ data, error }) {
        if (data) {
            this.objectApiInfosResponse = data;
            console.log('Object Infos:', data);
        }
        if (error) {
            console.log('Error:', error);
        }
    }
}
