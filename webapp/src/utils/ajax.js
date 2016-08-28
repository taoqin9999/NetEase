/**
 * @class netEase
 */
var netEase = (function(core) {
    'use strict';

    var utils = core.utils = core.utils || {};
    var injectCors = function(client) {
        if (core.config.supportCors) {
            client.withCredentials = true;
        }
    };

    var log = new core.Log('ajax');

    var ajax = function(req) {
        var retDfd = new $.Deferred(),
            client = new XMLHttpRequest(),
            response = {},
            handler = function() {
                if (this.readyState === 4) {
                    clearTimeout(client.__timeoutIntervalId);
                    log.debug('Ajax response: ' + this.responseText);
                    if (this.status === 200) {
                        if (req.dataType === 'json') {
                            try {
                                response = JSON.parse(this.responseText);
                            } catch (exception) {
                                log.error('Invalid json string', 'Request: ', JSON.stringify(req));
                                retDfd.resolve({});
                            }
                            retDfd.resolve(response);
                        } else {
                            retDfd.resolve(this.responseText);
                        }
                    } else if (this.status === 0) {
                        retDfd.reject({
                            status: '504',
                            statusText: 'connection timeout'
                        });
                    } else {
                        retDfd.reject(this);
                    }
                }
            };

        injectCors(client);

        req.dataType = req.dataType || 'json';
        req.type = req.type || 'POST';
        req.type = req.type.toUpperCase();

        if (req.type === 'GET' && req.data) {
            req.url += '?' + _.map(JSON.parse(req.data), function(val, name) {
                return name + '=' + val;
            }).join('&');
        }

        client.open(req.type, req.url, core.config.ajaxAsync);

        var timeout = req.timeout || core.config.ajaxTimeout;

        if (timeout > 0) {
            client.__timeoutIntervalId = setTimeout(function() {
                retDfd.reject({
                    status: '504',
                    statusText: 'connection timeout'
                }, req);
                client.abort();
            }, timeout);
        }

        client.onreadystatechange = handler;

        if (req.headers) {
            _.each(req.headers, function(val, name) {
                client.setRequestHeader(name, val);
            });
        }

        log.debug('Ajax request: ' + JSON.stringify(req.data || {}));

        if (req.type === 'GET') {
            client.send();
        } else {
            client.send(req.data || '{}');
        }

        return retDfd;
    };

    /**
     * Ajax request to backend
     * @private
     */
    utils.ajax = function(req) {
        return ajax(req);
    };

    return core;
}(netEase));
