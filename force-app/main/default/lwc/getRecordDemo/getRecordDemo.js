import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordDemo extends LightningElement {
    name
    phone
    owner
    annualRevenue
    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, PHONE_FIELD, OWNER_FIELD, ANNUALREVENUE_FIELD]})
    accountHandler({ data }) {
        if (data) {
            console.log(data);

            this.name = getFieldValue(data, NAME_FIELD);

            this.phone = getFieldValue(data, PHONE_FIELD);

            this.owner = getFieldValue(data, OWNER_FIELD);

            this.annualRevenue = getFieldDisplayValue(data, ANNUALREVENUE_FIELD);
        }
    }
}