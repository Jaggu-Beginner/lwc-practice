import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesByRecordTypeId extends LightningElement {
    selectedAccountSource = '';
    accountSourceOptions = [];

    selectedCustomerPriorityc = '';
    customerPrioritycOptions = [];

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT,
        recordTypeId: '$objectInfo.data.defaultRecordTypeId'
    })
    accountPicklistHandlers({ data, error }) {
        if (data) {
            console.log(data);

            this.accountSourceOptions = this.generateMultiPicklistValues(
                data.picklistFieldValues.AccountSource.values
            );

            this.customerPrioritycOptions = this.generateMultiPicklistValues(
                data.picklistFieldValues.CustomerPriority__c.values
            );
        }

        if (error) {
            console.error(error);
        }
    }

    generateMultiPicklistValues(values) {
        return values.map(item => ({
            label: item.label,
            value: item.value
        }));
    }

    handleChange(event) {
        const { name, value } = event.target;

        if (name === 'Account Source') {
            this.selectedAccountSource = value;
        }

        if (name === 'CustomerPriority__c') {
            this.selectedCustomerPriorityc = value;
        }
    }
}