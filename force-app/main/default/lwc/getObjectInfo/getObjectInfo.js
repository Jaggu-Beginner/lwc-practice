import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class GetObjectInfo extends LightningElement {
    
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;
    objectInformation = [];
    objectApiNamesBro = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];

    @wire(getObjectInfos, { objectApiNames: '$objectApiNamesBro' })
    getObjectInfosHandler({ data, error }) {
        if (data) {
            this.objectInformation = data.results.map(item => item.result);
            console.log('Multiple Object Info:', this.objectInformation);
        } else if (error) {
            console.error('Error:', error);
        }
    }
}