public class PicsumImageController {
	 @AuraEnabled(cacheable=true)
    public static String getImages() {
        
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        
        req.setEndpoint('https://picsum.photos/v2/list');
        req.setMethod('GET');
        
        HttpResponse res = http.send(req);
        
        if (res.getStatusCode() == 200) {
            return res.getBody(); // JSON string
        } else {
            throw new AuraHandledException('Error: ' + res.getStatus());
        }
    }
}