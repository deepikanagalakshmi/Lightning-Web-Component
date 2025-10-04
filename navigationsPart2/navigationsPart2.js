import { LightningElement, wire } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {CurrentPageReference} from 'lightning/navigation'

export default class NavigationsPart2 extends NavigationMixin (LightningElement) {

    navigateTab(){
        this[NavigationMixin.Navigate]({
            type : 'standard__navItemPage',
            attributes: {
                apiName: 'Sf_Resource_Component_Context_and_Toast' 
            }
        })
    }

    navigateRecordRelationshipPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordRelationshipPage',
            attributes: {
                objectApiName : 'Account',
                recordId : '001JX00000quJAvYAM',
                relationshipApiName : 'Contacts',
                actionName : 'view'

            }
        })
    }

    navigateExternalWebPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes:{
                url : 'https://www.salesforce.com'
            }
        })
    }

    navigateToLwc(){
        const defination = {
            componentDef: 'c:quizApp',
            attributes : {
                recordId : '37373737333' // in the target lwc, access this recordId using the property @api recordId
            }
        }
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes:{
                url : '/one/one.app#' + btoa(JSON.stringify(defination))
             }
                })
     
    }   

    //  deep linking, or navigation between pages programmatically.

    @wire(CurrentPageReference) pageRef

    get pageReference(){
        return this.pageRef ? JSON.stringify(this.pageRef,null,2) : ''
    }



}