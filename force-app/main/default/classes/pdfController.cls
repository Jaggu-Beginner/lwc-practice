public with sharing class pdfController {
    @AuraEnabled
    public static Attachment generatePDF(Id recordId, String htmlData){
        try {
            if(recordId == null){
                throw new AuraHandledException('RecordId is missing!');
            }

            PageReference page = Page.renderAsPdf;
            page.getParameters().put('pdfText', htmlData);

            Attachment objAttachment = new Attachment();
            objAttachment.Name = 'invoice.pdf';
            objAttachment.ParentId = recordId;
            objAttachment.Body = page.getContentAsPDF();
            objAttachment.IsPrivate = false;

            insert objAttachment;
            return objAttachment;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}