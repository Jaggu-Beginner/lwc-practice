import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image';
import PEOPLES_WALKING from '@salesforce/resourceUrl/people_walking';
export default class StaticImageComponent extends LightningElement {
    userImage = USER_IMAGE;

    peopleWalking = PEOPLES_WALKING;
}