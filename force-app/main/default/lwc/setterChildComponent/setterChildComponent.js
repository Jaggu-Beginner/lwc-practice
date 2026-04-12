import { LightningElement, api } from 'lwc';

export default class SetterChildComponent extends LightningElement {
    userDetls;
    @api
    get details(){
        return this.userDetls;
    }
    set details(data){
        let myAge = data.Age*2;
        this.userDetls = {...data, Age:myAge, "Location":"Hyderabad"};
    }
}