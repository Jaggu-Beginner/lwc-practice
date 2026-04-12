import { LightningElement } from 'lwc';
import DESCRIPTIONONE from '@salesforce/label/c.descriptionOne';
import DESCRIPTIONTWO from '@salesforce/label/c.descriptionTwo';
export default class CustomLabels extends LightningElement {
    LABELS = {
        descriptionone: DESCRIPTIONONE,
        descriptiontwo: DESCRIPTIONTWO
    }
}