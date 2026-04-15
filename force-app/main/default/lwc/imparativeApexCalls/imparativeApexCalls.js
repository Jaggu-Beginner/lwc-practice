import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class ImparativeApexCalls extends LightningElement {
    accounts
    handleClick(){
        getAccounts().then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error);
        })
    }
}