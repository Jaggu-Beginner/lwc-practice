public with sharing class MapsInLwcController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsAddress() {
        return [SELECT Id, Name, description, BillingStreet, BillingCity, 
        BillingState, BillingPostalCode, BillingCountry 
        FROM Account ORDER BY Name LIMIT 10];
    }
}