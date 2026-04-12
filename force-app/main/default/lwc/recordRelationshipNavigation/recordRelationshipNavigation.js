import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class RecordRelationshipNavigation extends NavigationMixin(LightningElement) {
    navigateContactHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '001Bi00000R1xTAIAZ',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })
    }
}