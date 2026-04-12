import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import ANNUALREVENUE_FIELD  from '@salesforce/schema/Account.AnnualRevenue';
export default class BaseLightningComponents extends LightningElement {
    @api objectApiName;
    @api recordId;

    objectName = ACCOUNT_OBJECT;
    fieldList = [NAME_FIELD, INDUSTRY_FIELD, TYPE_FIELD, ANNUALREVENUE_FIELD];
    successHandler(event){
        console.log(event.detail.id)
        const toastEvent = new ShowToastEvent({
            title: "Account Created",
            message: "Record Id: "+ event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(toastEvent);
    }
}