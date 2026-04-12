import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToNavItemPage extends NavigationMixin(LightningElement) {
    navigateHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Styling_In_LWC'
            }
        })
    }
}