import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';

import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import USERNAME_FIELD from '@salesforce/schema/User.Username';

export default class FetchingUserDetailsUsingWireServices extends LightningElement {
    userId = USER_ID;

    userDetails;
    errorMessage;

    @wire(getRecord, {
        recordId: '$userId',
        fields: [NAME_FIELD, EMAIL_FIELD, USERNAME_FIELD]
    })
    userDetailsHandler({ data, error }) {
        if (data) {
            this.userDetails = data.fields;
            this.errorMessage = undefined;
        } else if (error) {
            this.errorMessage = error.body.message;
            this.userDetails = undefined;
        }
    }

    @wire(getRecord, {
        recordId: '$userId',
        fields: [NAME_FIELD, EMAIL_FIELD, USERNAME_FIELD]
    })
    userDetailProperty;
}