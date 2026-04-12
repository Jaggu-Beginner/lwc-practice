import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
        this.dispatchEvent(new CustomEvent('close', {
            bubbles:true,
            detail: 'Modal Closed successfully'
        }));
    }
    footerHandler(){
        console.log('Footer called');
    }
}