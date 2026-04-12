import { LightningElement } from 'lwc';
import USER_ID from '@salesforce/user/Id'
import USER_GUEST from '@salesforce/user/isGuest'
export default class UserInformation extends LightningElement {
    userDetails = {
        userId: USER_ID,
        userIsGuest: USER_GUEST
    }
}