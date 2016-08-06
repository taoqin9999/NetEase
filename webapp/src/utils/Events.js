/**
 * @class netEase
 */
var netEase = (function(core) {
    'use strict';

    var eventSplitter = /\s+/;

    var Events = core.Events = function() {};

    var keys = Object.keys;

    if (!keys) {
        keys = function(obj) {
            var result = [];

            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    result.push(name);
                }
            }
            return result;
        }
    }

    /**
     * execute the callback method
     * @private
     * @param  {[type]} list     [description]
     * @param  {[type]} args     [description]
     * @param  {[type]} context  [description]
     * @param  {[type]} returned [description]
     * @return {[type]}          [description]
     */
    function callEach(list, args, context, returned) {
        var result;
        if (list) {
            for (var i = 0, len = list.length; i < len; i += 2) {
                result = list[i].apply(list[i + 1] || context, args);
                result === false && returned.status && (returned.status = false);
            }
        }
    }

    /**
     * [on description]
     * @private

     * @param  {[type]}   events   [description]
     * @param  {Function} callback [description]
     * @param  {[type]}   context  [description]
     * @return {[type]}            [description]
     */
    Events.on = function(events, callback, context) {
        var e, list, cache;
        if (!callback) {
            return this;
        }
        events = events.split(eventSplitter);
        cache = this.__events || (this.__events = {});

        while (e = events.shift()) {
            list = cache[e] || (cache[e] = []);
            list.push(callback, context);
        }
        return this;
    }

    /**
     * Remove callbacks.If 'context' is null, removes all callbacks
     * with that function. If 'callback' is null, removes all callbacks for the
     * event. If 'events' is null, removes all bound callbacks for all events.
     *
     * @param  {[type]}   events   [description]
     * @param  {Function} callback [description]
     * @param  {[type]}   context  [description]
     * @return {[type]}            [description]
     */
    Events.off = function(events, callback, context) {
        var e, list;
        var cache = this.__events;
        if (!cache) {
            return this;
        }

        if (!(events || callback || context)) {
            delete this.__events;
            return this;
        }

        events = events ? events.split(eventSplitter) : keys(cache);

        while (e = events.shift()) {
            list = cache[e];
            if (!list) {
                continue;
            }

            if (!(callback || context)) {
                delete cache[e];
                continue;
            }

            for (var i = list.length - 2; i >= 0; i -= 2) {
                if (!(callback && list[i] !== callback || context && list[i + 1] !== context)) {
                    list.splice(i, 2);
                }
            }
        }
        return this;
    }

    /**
     * [trigger description]
     * @private
     *
     * @param  {[type]} events [description]
     * @return {[type]}        [description]
     */
    Events.trigger = function(events) {
        var e, all, list, len, rest = [],
            args;
        var cache = this.__events;
        var returned = {
            status: true
        };

        if (!cache) {
            return this;
        }

        events = events.split(eventSplitter);

        for (var i = 1, len = arguments.length; i < len; i++) {
            rest[i - 1] = arguments[i];
        }

        while (e = events.shift()) {
            if (all = cache.all) {
                all = all.slice();
            }

            if (list = cache[e]) {
                list = list.slice();
            }

            // execute the callback method
            callEach(list, rest, this, returned);

            // execute the callback methods all
            callEach(all, [e].concat(rest), this, returned);
        }

        return returned.status;
    }

    return core;
}(netEase));
