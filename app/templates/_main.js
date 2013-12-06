(function ($, window, document, undefined) {

    'use strict';

    $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>  = function (options) {

        var o = $.extend(true, {}, $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults, options), <%=  _.classify(pluginName) %>;


        /** @constructor */
        <%= _.classify(pluginName) %> = function <%= _.classify(pluginName) %> (element) {
            this.$el = $(element);

            this.init();
            this.addEventListeners();
        }

        /** @access private */
        <%= _.classify(pluginName) %>.prototype.init = function init() {}

        /** @access private */
        <%= _.classify(pluginName) %>.prototype.addEventListeners = function addEventListeners() {}

        return this.each(function() {
            return new <%=  _.classify(pluginName) %>(this);
        });

    };

    $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults = {};

}(jQuery, window, document));