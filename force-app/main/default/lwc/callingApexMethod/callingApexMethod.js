import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class CallingApexMethod extends LightningElement {
    @wire(getAccounts)
    accounts;
    accountsList;
    @wire(getAccounts)
    accountsHandler({data, error}){
        if(data){
            this.accountsList = data.map(item=>{
                let newType = item.Type === 'Customer - Direct'? 'Direct':
                item.Type === "Customer - Channel"? "Channel": "---------"
                return {...item, newType}
            })
        }
        if(error){

        }
    }
}