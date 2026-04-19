public with sharing class pdfVfPageController {
    public String pdfText {get;set;}

    public pdfVfPageController() {
        pdfText = ApexPages.currentPage().getParameters().get('pdfText');
    }
}