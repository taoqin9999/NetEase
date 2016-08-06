/**
 * @class netEase
 */
var netEase = (function(core) {
    'use strict';

    var utils = core.utils = core.utils || {};

    /**
     * Ajax request to backend
     * @private
     */
    utils.ajax = function(req) {
        req.type = req.type || 'GET';
        req.dataType = req.dataType || 'jsonp';
        req.async = core.config.ajaxAsync;
        req.jsonp = 'callback';

        if (req.type === 'GET' && req.data) {
            req.url += '?' + _.map(req.data, function(val, name) {
                return name + '=' + val;
            }).join('&');
        }

        return $.ajax(req);
    };

    return core;
}(netEase));
