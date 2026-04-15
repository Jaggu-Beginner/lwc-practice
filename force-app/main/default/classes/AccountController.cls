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
     @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        string key = '%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry 
                FROM Account 
                WHERE Name LIKE :key LIMIT 5];
    }
}