import { LightningElement } from 'lwc';

export default class C2pParentComponet extends LightningElement {
    showModal = false;
    msg;
    showModalHandler(){
        this.showModal = true;
    }
    closeHandler(event){
        this.msg = event.detail;
        this.showModal = false;
    }
}