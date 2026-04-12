import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToAura extends NavigationMixin(LightningElement) {

    navigateToAura() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__NavigateToAuraComponent'
            },
            state: {
                c__id: '001ABC123456789'
            }
        });
    }
}