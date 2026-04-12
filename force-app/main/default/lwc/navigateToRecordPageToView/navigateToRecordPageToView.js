import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRecordPageToView extends NavigationMixin(LightningElement) {
    navigateToViewContactRecord(){
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordPage',
            attributes:{
                recordId:'0037200000aSTVtAAO',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    navigateToEditTheContact(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0037200000aSTVtAAO',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}