import { LightningElement, wire } from 'lwc';
import filterAccountsByType from '@salesforce/apex/AccountController.filterAccountsByType';

export default class WireApexWithParameters extends LightningElement {
    selectedType = '';

    // wire with reactive parameter
    @wire(filterAccountsByType, { type: '$selectedType' })
    wiredAccounts({ data, error }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
            console.error('ERROR:', error);
        }
    }

    accounts;
    error;

    // dropdown options
    get typeOptions() {
        return [
            { label: "Customer - Channel", value: "Customer - Channel" },
            { label: "Customer - Direct", value: "Customer - Direct" }
        ];
    }

    // FIXED handler
    typeHandler(event) {
        this.selectedType = event.detail.value;
    }

    // helpers
    get hasAccounts() {
        return this.accounts && this.accounts.length > 0;
    }

    get hasError() {
        return this.error;
    }
}