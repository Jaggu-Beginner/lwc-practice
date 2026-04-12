import { LightningElement } from 'lwc';

export default class LwcLifeCycleHooks extends LightningElement {
    isChildVisible = false;
    constructor() {
        super();
        console.log('constructor');
    }
    connectedCallback() {
        console.log('connectedCallback Called');
    }
    renderedCallback() {
        console.log('Parent renderedCallback Called');
    }
    handleChange() {
        this.isChildVisible = !this.isChildVisible;
    }
    errorCallback(error, stack) {
        console.log(error.message);
        console.log(stack);
    }
}