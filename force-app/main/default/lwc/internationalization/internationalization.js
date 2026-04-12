import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import DIR from '@salesforce/i18n/dir';
export default class Internationalization extends LightningElement {
    dir = 'rtl';
    number = 3492409804.89
    formattedNumber = new Intl.NumberFormat('us-EG', {
        style : 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol'
    }).format(this.number)
}