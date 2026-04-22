public with sharing class ContactControllerForLwc {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsFields(){
        try {
            return [SELECT Id, Name, Email, Phone FROM Contact];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}