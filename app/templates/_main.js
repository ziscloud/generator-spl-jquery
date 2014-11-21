/**
 * See (http://jquery.com/).
 * @name jQuery
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 */

/**
 * See (http://jquery.com/)
 * @name fn
 * @class
 * See the jQuery Library  (http://jquery.com/) for full details.  This just
 * documents the function and classes that are added to jQuery by this plug-in.
 * @memberOf jQuery
 */
(function ($, window, document, undefined) {

    'use strict';

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

        var options, <%=  _.classify(pluginName) %>;

        /**
         * @memberOf jQuery.fn.<%=  _.camelize(pluginName.toLowerCase()) %>
         * @property {Object} options - Settings passed to the function merged with $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults
         * @private
         */
        options = $.extend(true, {}, $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults, settings);

        /**
         * @constructor
         * @ignore
         */
        <%= _.classify(pluginName) %> = function <%= _.classify(pluginName) %> (element) {
            this.$el = $(element);

            this.init();
            this.addEventListeners();
        };

        /** @access private */
        <%= _.classify(pluginName) %>.prototype.init = function init() {

        };

        /** @access private */
        <%= _.classify(pluginName) %>.prototype.addEventListeners = function addEventListeners() {

        };

        return this.each(function() {
            return new <%=  _.classify(pluginName) %>(this);
        });

    };

    /**
     * @name jQuery.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults
     * @memberOf jQuery.fn.<%=  _.camelize(pluginName.toLowerCase()) %>
     * @description Default options
     * @public
     */
    $.fn.<%=  _.camelize(pluginName.toLowerCase()) %>.defaults = {};

}(jQuery, window, document));
