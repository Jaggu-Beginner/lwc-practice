import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
const COLS = [
    { label: "Id", fieldName: "Id" },
    { label: "Name", fieldName: "Name" },
    { label: "Title", fieldName: "Title" },
    { label: "Phone", fieldName: "Phone", editable: true },
    { label: "Email", fieldName: "Email", type: 'email', editable: true }
]
export default class UpdateRecordDemo extends LightningElement {
    contacts = [];
    columns = COLS
    draftValues = [];
    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: 'AllContacts'
    })
    listViewHandler({ data, error }) {
        if (data) {
            console.log('Data:', data);
            this.contacts = data.records.records.map(item => {
                return {
                    "Id": this.getValue(item, "Id"),
                    "Name": this.getValue(item, "Name"),
                    "Title": this.getValue(item, "Title"),
                    "Phone": this.getValue(item, "Phone"),
                    "Email": this.getValue(item, "Email")
                }
            })
        } else if (error) {
            console.error('Error:', error);
        }
    }
    getValue(data, field) {
        return data.fields[field]?.value || '';
    }
    handleSave(event) {
        console.log(JSON.stringify(event.detail.draftValues));
        const drafts = event.detail.draftValues;
        const recordInputs = event.detail.draftValues.map(draft => {
            const fields = { ...draft }
            return { fields: fields }
        })
        const promises = recordInputs.map(recordInput => updateRecord(recordInput))
        Promise.all(promises).then(() => {
            console.log('contact created successfully');
            const count = drafts.length;
            this.showToast(
                'Success',
                count === 1
                ? 'Contact updated successfully!'
                : `${count} contacts updated successfully`,
                'success'
            )
            this.draftValues = [];
        }).catch((error) => {
            console.log('error updating the record');
            this.showToast('Error', error.body?.message || 'Something went wrong', 'error')
        })

    }
    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }))
    }
}