import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateLwcComponent extends NavigationMixin(LightningElement) {
    navigateToLwcComponent(){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__navigateLwcTarget'
            },
            state: {
                c__recordId: '001XXXXXXXXXXXXXXX'
            }
        })
    }
}