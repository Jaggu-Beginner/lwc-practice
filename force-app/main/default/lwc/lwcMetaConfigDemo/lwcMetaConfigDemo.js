import { LightningElement, api } from 'lwc';

export default class LwcMetaConfigDemo extends LightningElement {
    @api heading
    @api recordId
    @api age
    @api levels
}