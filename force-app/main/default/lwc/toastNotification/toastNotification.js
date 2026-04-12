import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastNotification extends LightningElement {
    toastHandler() {
        this.showToastHandler('Success', "{0} Account created {1}", 'success');
    }

    toastHandlerTwo() {
        this.showToastHandler('Error', 'Account creation Failed', 'error');
    }

    toastHandlerThree(){
        this.showToastHandler('Warning', 'The password should 15 chars!!', 'warning');
    }

    toastHandlerFour(){
        this.showToastHandler('Info', 'Summer 24 release is coming soon!', 'info');
    }

    showToastHandler(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{
                    url: 'https://www.salesforce.com',
                    label: 'CLICK HERE'
                }
            ],
            mode: 'sticky'
        })
        this.dispatchEvent(event);
    }
}