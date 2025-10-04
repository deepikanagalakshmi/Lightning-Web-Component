import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';


export default class Navigations extends NavigationMixin (LightningElement) {

    // type: 'standard__namedPage'

    navigateToHome(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        })
    }

    navigateToChatter(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        })
       
    }

    // type: 'standard__objectPage'

    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateToNewRecordWithDefault(){

        const defaultValues = encodeDefaultFieldValues({
            FirstName : 'Taylor',
            LastName: 'Swift',
            LeadSource: 'Other'
        })

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName:'new',
            },
            state: {
                defaultFieldValues: defaultValues
            }
        })
    }

    navigateToList(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        })
    }

    navigateToFile(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        }) 
    }

    recordView(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes: {
                recordId: '003JX00000osGbnYAE',
                objectApiName: 'Contact',
                actionName: 'view'
            }
        })
    }

     recordEdit(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes: {
                recordId: '003JX00000osGbnYAE',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }

    
}