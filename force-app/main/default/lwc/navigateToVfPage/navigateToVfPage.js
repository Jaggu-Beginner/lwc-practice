import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToVfPage extends NavigationMixin(LightningElement) {
    navigateToVfPageComp(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/apex/MyVisualForcePage'
            }
        }).then(generatedUrl => {
            console.log(generatedUrl);
            window.open(generatedUrl, '_blank');
        })
    }
}