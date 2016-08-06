/**
 * @class netEase.eventManager
 */
var netEase = (function(core) {
    'use strict';

    /**
     * Events Object
     * @property {Object} Events
     */
    var Events = core.Events;

    var EventManager = function() {

        /**
         * Event Class Object
         * @property {Object} Event Object
         * @private
         */
        this._EventsObj = Events;
    };

    /**
     * add callback function to dest Object
     * @method on
     * @param {String} event
     * @param {Object} callback
     * @param {Object} context: optional
     * @returns {Object}
     */
    EventManager.prototype.on = function(event, callback, context) {
        event = event;
        context = context;
        if (typeof callback === 'undefined' || callback === null) {
            return this;
        }

        this._EventsObj.on.apply(this, arguments);
        return this;
    };

    /**
     * add callback function to dest Object
     * @param {String} event: optional.
     * @param {Object} callback: optional.
     * @param {Object} context: optional.
     * @returns {Object}
     */
    EventManager.prototype.off = function() {
        this._EventsObj.off.apply(this, arguments);
        return this;
    };

    /**
     * trigger  callback function
     * @method trigger
     * @param {String} event: optional
     * @param {Object} arg:
     * @returns {Object}
     */
    EventManager.prototype.trigger = function() {
        this._EventsObj.trigger.apply(this, arguments);
    };

    core.EventManager = new EventManager();
    return core;
}(netEase));
