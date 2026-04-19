import { LightningElement, wire } from 'lwc';
import getAccountsAddress from '@salesforce/apex/MapsInLwcController.getAccountsAddress';
import Street from '@salesforce/schema/Asset.Street';
import City from '@salesforce/schema/Asset.City';
import PostalCode from '@salesforce/schema/Asset.PostalCode';
import State from '@salesforce/schema/Asset.State';
import Country from '@salesforce/schema/Asset.Country';
export default class MapsUsingLwc extends LightningElement {
    mapMarkers=[];
    markersTitle="Accounts Location";
    @wire(getAccountsAddress)
    accountsAddress({ data, error}){
        if(data){
            console.log(data)
            this.formatData(data)
        }
        if(error){
            console.error(error)
        }
    }
    formatData(data){
        this.mapMarkers = data.map(item=>{
            return {
                location:{
                    Street:item.BillingStreet || '',
                    City:item.BillingCity || '',
                    PostalCode:item.BillingPostalCode || '',
                    State:item.BillingState || '',
                    Country:item.BillingCountry
                },
                icon:'utility.salesforce1',
                title:item.Name,
                value:item.Name,
                description:item.description
            }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value;
    }
    handleMarkerSelect(event){
        this.selectedMarker = event.target.selectedMarkerValue;
    }
}