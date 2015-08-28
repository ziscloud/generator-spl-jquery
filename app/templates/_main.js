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
    var <%= uss.classify(pluginName) %> = function <%= uss.classify(pluginName) %> (element, options) {
        this.$el     = $(element);
        this.options = options;

        this.init();
        this.addEventListeners();
    };

    /** @access private */
    <%= uss.classify(pluginName) %>.prototype.init = function init() {

    };

    /** @access private */
    <%= uss.classify(pluginName) %>.prototype.addEventListeners = function addEventListeners() {

    };


    /**
     * @class
     * @name jQuery.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>
     * @memberOf jQuery.fn
     * @example
 *    $('.<%= pluginName %>').<%=  uss.camelize(pluginName.toLowerCase()) %>({
     *
     *    });
     *
     * @description My fancy plugin description
     * @param {Object} settings
     * @return {Object} jQuery
     */
    $.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>  = function (settings) {
        /**
         * @memberOf jQuery.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>
         * @property {Object} options - Settings passed to the function merged with $.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>.defaults
         * @private
         */
        var options = $.extend(true, {}, $.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>.defaults, settings);

        return this.each(function() {
            return new <%=  uss.classify(pluginName) %>(this, options);
        });

    };

    /**
     * @name jQuery.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>.defaults
     * @memberOf jQuery.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>
     * @description Default options
     * @public
     */
    $.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>.defaults = defaults;

    /**
     * @name jQuery.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>.<%= uss.classify(pluginName) %>
     * @memberOf jQuery.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>
     * @public
     */
    $.fn.<%=  uss.camelize(pluginName.toLowerCase()) %>.<%= uss.classify(pluginName) %> = <%= uss.classify(pluginName) %>;

});
