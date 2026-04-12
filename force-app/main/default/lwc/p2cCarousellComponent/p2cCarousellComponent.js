import { LightningElement, api } from 'lwc';

export default class P2cCarousellComponent extends LightningElement {
    @api carousellDetails;
    connectedCallback() {
        console.log('carousellDetails', this.carousellDetails);
    }
}