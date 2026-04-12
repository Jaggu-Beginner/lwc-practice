import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import SALUTATION_FIELD from '@salesforce/schema/Contact.Salutation';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordDemo extends LightningElement {

    formFields = {};

    // Get Object Info
    @wire(getObjectInfo, { objectApiName: CONTACT_OBJECT })
    objectInfo;

    // Get Picklist Values
    @wire(getPicklistValues, {
        recordTypeId: '$objectInfo.data.defaultRecordTypeId',
        fieldApiName: SALUTATION_FIELD
    })
    salutationPicklist;

    // Convert to combobox options
    get salutationOptions() {
        return this.salutationPicklist.data
            ? this.salutationPicklist.data.values.map(item => ({
                label: item.label,
                value: item.value
            }))
            : [];
    }

    // Handle Input Change
    changeHandler(event) {
        const { name, value } = event.target;

        this.formFields = {
            ...this.formFields,
            [name]: value
        };
    }

    // Create Contact
    createContact() {
        const recordInput = {
            apiName: CONTACT_OBJECT.objectApiName,
            fields: this.formFields
        };

        createRecord(recordInput)
            .then(result => {
                this.showToast(
                    'Success',
                    `Contact created with Id: ${result.id}`
                );

                // Reset form
                this.template.querySelector('form.createForm').reset();
                this.formFields = {};
            })
            .catch(error => {
                let errorMessage = 'Unknown error';

                if (error.body) {
                    if (error.body.output && error.body.output.errors.length > 0) {
                        errorMessage = error.body.output.errors[0].message;
                    } else if (error.body.message) {
                        errorMessage = error.body.message;
                    }
                } else if (error.message) {
                    errorMessage = error.message;
                }

                this.showToast('Error Creating Record', errorMessage, 'error');
            });
    }

    // Toast Helper
    showToast(title, message, variant = 'success') {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}