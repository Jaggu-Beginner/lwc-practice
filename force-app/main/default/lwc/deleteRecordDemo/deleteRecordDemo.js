import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class DeleteRecordDemo extends LightningElement {
    recordId
    changeHandler(event) {
        this.recordId = event.target.value;
    }
    deleteHandler() {
        deleteRecord(this.recordId).then(() => {
            console.log('deleted successfully')
            this.showToast('Success', 'record deleted successfully', 'success');
        }).catch(error => {
            console.log(error);
            this.showToast('Error', 'error deleting record', 'error');

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