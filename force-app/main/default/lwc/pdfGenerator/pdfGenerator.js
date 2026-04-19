import { LightningElement, api } from 'lwc';
import generatePDF from '@salesforce/apex/pdfController.generatePDF';
import logo from '@salesforce/resourceUrl/invoiceLogo';
export default class PdfGenerator extends LightningElement {
    @api recordId;

    imageUrl = logo;
    
    invoiceData = {
        invoiceNo: '123',
        invoiceCreated: 'January 1, 2019',
        invoiceDue: 'January 10, 2020',
        companyName: 'Sparksuite, Inc.',
        address1: '12345 Sunny Road',
        address2: 'Sunnyville, CA 12345'
    };

    clientData = {
        client: 'Acme Corp',
        username: 'John Doe',
        email: 'john@example.com'
    };

    services = [
        { name: 'Consultant fee', amount: 1000.00 },
        { name: 'Website design', amount: 300.00 },
        { name: 'Hosting (3 months)', amount: 75.00 }
    ];

    get totalAmount() {
        return this.services.reduce((total, service) => total + service.amount, 0);
    }

    pdfHandler() {
        console.log('RecordId:', this.recordId);

        if (!this.recordId) {
            alert('RecordId is missing. Place component on record page.');
            return;
        }

        let content = this.template.querySelector('.container');

        generatePDF({
            recordId: this.recordId,
            htmlData: content.outerHTML
        })
            .then(result => {
                console.log('Attachment Id:', result.Id);
            })
            .catch(error => {
                console.error(error);
            });
    }
}