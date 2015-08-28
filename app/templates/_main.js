// UMD dance - https://github.com/umdjs/umd
!function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(root.jQuery);
  }
}(this, function($) {
    'use strict';


    var defaults = {};

    /**
     * @constructor
     * @ignore
     */
    var <%= _.classify(pluginName) %> = function <%= _.classify(pluginName) %> (element, options) {
        this.$el     = $(element);
        this.options = options;

        this.init();
        this.addEventListeners();
    };

    /** @access private */
    <%= _.classify(pluginName) %>.prototype.init = function init() {

    };

    /** @access private */
    <%= _.classify(pluginName) %>.prototype.addEventListeners = function addEventListeners() {

    };


    /**
     * @class
     * @name jQuery.fn.<%=  _.camelize(pluginName.toLowerCase()) %>
     * @memberOf jQuery.fn
     * @example
 *    $('.<%= pluginName %>').<%=  _.camelize(pluginName.toLowerCase()) %>({
     *
     *    });
     *
     * @description My fancy plugin description
     * @param {Object} settings
     * @return {Object} jQuery
     */
    $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>  = function (settings) {
        /**
         * @memberOf jQuery.fn.<%=  _.camelize(pluginName.toLowerCase()) %>
         * @property {Object} options - Settings passed to the function merged with $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults
         * @private
         */
        var options = $.extend(true, {}, $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults, settings);

        return this.each(function() {
            return new <%=  _.classify(pluginName) %>(this, options);
        });

    };

    /**
     * @name jQuery.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults
     * @memberOf jQuery.fn.<%=  _.camelize(pluginName.toLowerCase()) %>
     * @description Default options
     * @public
     */
    $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults = defaults;

    /**
     * @name jQuery.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.<%= _.classify(pluginName) %>
     * @memberOf jQuery.fn.<%=  _.camelize(pluginName.toLowerCase()) %>
     * @public
     */
    $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.<%= _.classify(pluginName) %> = <%= _.classify(pluginName) %>;

});
