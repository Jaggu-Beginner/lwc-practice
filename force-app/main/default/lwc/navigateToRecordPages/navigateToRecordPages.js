import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'; 
import LeadSource from '@salesforce/schema/Contact.LeadSource';
import Salutation from '@salesforce/schema/Contact.Salutation';
import State from '@salesforce/schema/Asset.State';
export default class NavigateToRecordPages extends NavigationMixin(LightningElement) {
    navigateToRecordPage() {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes: {
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }

    navigateToTheNewContactPageWithDefaultValues(){
        const defaultvalue = encodeDefaultFieldValues({
            Salutation:'Mr.',
            FirstName:'Zero To',
            LastName:'Hero',
            LeadSource:'Other'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues: defaultvalue
            }
        })
    }

    navigateToContactListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }

    navigateToContentFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}