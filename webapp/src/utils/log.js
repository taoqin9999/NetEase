/**
 * @class netEase
 */
var netEase = (function(core) {
    'use strict';

    /**
     * Level of log to print.
     *
     *     netEase.logLevel = 'error';
     *
     * Could be:
     *
     * - debug
     * - log
     * - error
     *
     * @property logLevel
     * @type {String}
     */
    core.logLevel = 'log';

    /**
     * Print debug info.
     *
     *     netEase.debug('This is debug message.');
     *
     * @param {String} info debug info
     */
    core.debug = function() {
        if (core.logLevel === 'debug') {
            var args = Array.prototype.slice.call(arguments);

            args.unshift('netEase[debug]:');

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
    core.log = function() {
        if (core.logLevel === 'debug' || core.logLevel === 'log') {
            var args = Array.prototype.slice.call(arguments);
            var now = new Date();

            args.unshift('netEase[log][' + now.toLocaleTimeString() + ' ' + now.getMilliseconds() + ']:');

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
    core.error = function() {
        if (core.logLevel === 'debug' || core.logLevel === 'log' || core.logLevel === 'error') {
            var args = Array.prototype.slice.call(arguments);

            args.unshift('netEase[error]:');

            console.error.apply(console, args);
        }
    };

    return core;
}(netEase));
