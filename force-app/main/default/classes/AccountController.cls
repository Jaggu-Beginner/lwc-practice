public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Industry, Type FROM Account LIMIT 5];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountsByType(String type){
        return [SELECT Id, Name, Type, Industry 
                FROM Account 
                WHERE Type = :type];
    }
}