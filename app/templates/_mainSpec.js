describe('SPL jQuery <%= pluginName %> Plugin', function() {

    var $<%= uss.camelize(pluginName.toLowerCase()) %>;

    beforeEach(function() {
        /** MAGIc */
    });

    it('should be a jQuery plugin', function() {
        $<%= uss.camelize(pluginName.toLowerCase()) %> = $('body').<%= uss.camelize(pluginName.toLowerCase()) %>();
        expect($<%= uss.camelize(pluginName.toLowerCase()) %>.jquery).toBeTruthy();
    });

});