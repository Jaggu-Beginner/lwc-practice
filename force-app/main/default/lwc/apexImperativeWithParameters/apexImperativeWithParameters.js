import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';
export default class ApexImperativeWithParameters extends LightningElement {
    searchKey = ''
    accounts
    timer
    changeHandler(event){
        window.clearTimeout(this.timer)
        this.searchKey = event.target.value;
        this.timer = setTimeout(() => {
            this.callApex()
        }, 2000);
    }
    callApex(){
        findAccounts({searchKey:this.searchKey})
        .then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.log(error);
        })
    }
}