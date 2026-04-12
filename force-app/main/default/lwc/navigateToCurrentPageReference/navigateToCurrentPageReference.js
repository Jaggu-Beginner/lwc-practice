import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
export default class NavigateToCurrentPageReference extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    get navigateToCurrentPageReference(){
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2): ''
    }
}