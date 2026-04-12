import { LightningElement, wire, api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';
export default class GetRecordUiDemo extends LightningElement {
    formFields = [
        {fieldName:'AccountNumber', label:'Account Number'},
        {fieldName:'AnnualRevenue', label:'Annual Revenue'},
        {fieldName:'BillingCity', label:'Billing City'},
        {fieldName:'BillingCountry', label:'Billing Country'},
        {fieldName:'Industry', label:'Industry'}
        
    ];
    @api recordId;
    @wire(getRecordUi, {recordIds: '$recordId', layoutTypes: 'Full', modes: 'Edit'})
    getRecordUiHandler({ data, error }){
        if(data){
            console.log(data)
            this.formFields = this.formFields.map(item => {
                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.error(error)
        }
    }
    get hasData(){
        return this.formFields && this.formFields.length > 0;
    }
}