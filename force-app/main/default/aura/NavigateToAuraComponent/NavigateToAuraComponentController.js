({
    doInit : function(component) {
        var pageRef = component.get("v.pageReference");

        if (pageRef && pageRef.state) {
            var id = pageRef.state.c__id;
            console.log('Received Id:', id);
            component.set("v.id", id);
        }
    }
})