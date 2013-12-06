describe('SPL jQuery <%= pluginName %> Plugin', function() {

    var $<%= _.camelize(pluginName.toLowerCase()) %>;

    beforeEach(function() {
        /** MAGIc */
    });

    it('should be a jQuery plugin', function() {
        $<%= _.camelize(pluginName.toLowerCase()) %> = $('body').<%= _.camelize(pluginName.toLowerCase()) %>();
        expect($<%= _.camelize(pluginName.toLowerCase()) %>.jquery).toBeTruthy();
    });

});