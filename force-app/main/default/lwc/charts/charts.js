import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';
export default class Charts extends LightningElement {
    pieChartLabels = [];
    pieChartData = [];
    @wire(getOpportunities)
    opportunityHandler({ data, error }) {
        if (data) {
            console.log(data);
            const result = data.reduce((acc, curr) => {
                acc[curr.StageName] = (acc[curr.StageName] || 0) + 1;
                return acc;
            }, {});
            if(Object.keys(result).length > 0){
                this.pieChartData = Object.values(result);
                this.pieChartLabels = Object.keys(result);
            }
            console.log(JSON.stringify(result));
        }
        if (error) {
            console.error(error);
        }
    }
}