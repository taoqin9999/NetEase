/**
 * @class netEase
 */
var netEase = (function(core) {
    'use strict';

    var Log = core.Log = function(pageName) {
        this.pageName = pageName || '';

        this.pageName = 'page name:' + this.pageName + ';';
    };


    /**
     * Print debug info.
     *
     *     netEase.debug('This is debug message.');
     *
     * @param {String} info debug info
     */
    Log.prototype.debug = function() {
        if (core.config.logLevel === 'debug') {
            var args = Array.prototype.slice.call(arguments);

            args.unshift('netEase[debug]:' + this.pageName);

            console.debug.apply(console, args);
        }
    };

    /**
     * Print log info.
     *
     *     netEase.log('This is log message.');
     *
     * @param {String} info log info
     */
    Log.prototype.log = function() {
        if (core.config.logLevel === 'debug' || core.config.logLevel === 'log') {
            var args = Array.prototype.slice.call(arguments);
            var now = new Date();

            args.unshift('netEase[log][' + now.toLocaleTimeString() + ' ' + now.getMilliseconds() + ']:' + this.pageName);

            console.log.apply(console, args);
        }
    };

    /**
     * Print error info.
     *
     *     netEase.error('This is error message.');
     *
     * @param {String} info error info
     */
    Log.prototype.error = function() {
        if (core.config.logLevel === 'debug' || core.config.logLevel === 'log' || core.config.logLevel === 'error') {
            var args = Array.prototype.slice.call(arguments);

            args.unshift('netEase[error]:' + this.pageName);

            console.error.apply(console, args);
        }
    };


    return core;
}(netEase));
