import { LightningElement } from 'lwc';

export default class SetterParentComponent extends LightningElement {
    userDetails = {
        Name:"Jagadhish",
        Age:"25",
        City:"Hyderabad",
        loginDetails:{
            email:"somthing@gmail.com",
            password:"password"
        }
    }
}