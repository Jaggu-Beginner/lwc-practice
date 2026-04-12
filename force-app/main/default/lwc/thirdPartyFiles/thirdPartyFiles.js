import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
export default class ThirdPartyFiles extends LightningElement {
    currentDate;
    isLoaded = false;
    renderedCallback() {
        if (this.isLoaded) {
            return;
        } else {
            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'),
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(() => {
                this.setDateOnScreen()
            })
            this.isLoaded = true;
        }
    }

    setDateOnScreen() {
        this.currentDate = moment().format('LLLL');
    }
}