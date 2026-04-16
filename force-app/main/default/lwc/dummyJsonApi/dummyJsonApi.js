import { LightningElement } from 'lwc';

export default class DummyJsonApi extends LightningElement {
    searchKey = ''
    products = []
    connectedCallback() {
        this.searchKey = 'phone';
        this.fetchData();
    }
    fetchData() {
        fetch(`https://dummyjson.com/products/search?q=${this.searchKey}`)
            .then(response => response.json())
            .then(data => {
                this.products = data.products;
            })
            .catch(error => console.error(error));
    }
    handleChange(event) {
        this.searchKey = event.target.value;
    }
    handleKeyUp(event) {
        this.searchKey = event.target.value;

        if (event.key === 'Enter') {
            this.fetchData();
        }
    }
    handleSearch(){
        this.fetchData();
    }
}