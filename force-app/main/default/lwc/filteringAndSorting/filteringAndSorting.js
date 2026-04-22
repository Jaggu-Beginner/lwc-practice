import { LightningElement, wire } from 'lwc';
import getContactsFields from '@salesforce/apex/ContactControllerForLwc.getContactsFields';

export default class FilteringAndSorting extends LightningElement {
    /** Table Headers */
    tableHeadings = ["Id", "Name", "Email", "Phone"];
    /** Filter variables */
    fullTableData = [];
    filteredData = [];
    timer;
    filterBy = "Name";

    /** sorting variables */
    sortedBy="Name";
    sortDirection="asc";

    @wire(getContactsFields)
    contactsFields({ data, error }) {
        if (data) {
            console.log(data);
            this.fullTableData = data;
            this.filteredData = data;
        }
        if (error) {
            console.error(error);
        }
    }
    get fileteByOptions() {
        return [
            { label: "All", value: "All" },
            { label: "Id", value: "Id" },
            { label: "Name", value: "Name" },
            { label: "Email", value: "Email" },
            { label: "Phone", value: "Phone" }
        ]
    }
    filterByHandler(event) {
        this.filterBy = event.target.value;
    }

    filterHandler(event) {
        const { value } = event.target;

        //  Cancel previous timer
        clearTimeout(this.timer);

        //  Set new timer
        this.timer = setTimeout(() => {

            if (value) {
                console.log(value);

                this.filteredData = this.fullTableData.filter(eachObj => {
                    if (this.filterBy === "All") {
                        return Object.keys(eachObj).some(key => {
                            return String(eachObj[key])
                                .toLowerCase()
                                .includes(value.toLowerCase());
                        });
                    } else {
                        const val = eachObj[this.filterBy] ? eachObj[this.filterBy]:''
                        return val.toLowerCase().includes(value);
                    }
                });

            } else {
                // Reset
                this.filteredData = [...this.fullTableData];
            }

        }, 500);
    }

    /** Sorting Logic here */
    sortHandler(event){
        this.sortedBy = event.target.value;
        this.filteredData = [...this.sortBy(this.filteredData)];
    }
    sortBy(data){
        const clonedData = [...data];
        clonedData.sort((a, b)=>{
            if(a[this.sortedBy] === b[this.sortedBy]){
                return 0;
            }
            return this.sortDirection === 'desc' ?
            a[this.sortedBy] > b[this.sortedBy] ? -1 : 1 :
            a[this.sortedBy] < b[this.sortedBy] ? -1 : 1
        })
        return clonedData;
    }
}