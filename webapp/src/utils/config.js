/**
 * Configurations for netEase library.
 *
 * @class netEase.config
 * @singleton
 */
var netEase = (function(core) {
    'use strict';

    core.config = {
        /**
         * Ajax request timeout length
         * @property ajaxTimeout
         * @type {Number}
         */
        ajaxTimeout: 5000,
        /**
         * Should netEase Core support CORS
         * @property supportCors
         * @type {Boolean}
         */
        supportCors: false,

        /**
         * ajaxAsync
         * @type {Boolean}
         */
        ajaxAsync: false,

        /**
         * 获取推荐内容url
         * @type {String}
         */
        recommendDataUrl: 'http://j.news.163.com/hy/demorec.s',

        /**
         * 获取新闻内容url
         * @type {String}
         */
        newshotDataUrl: 'http://j.news.163.com/hy/newshot.s'
    };

    return core;
}(netEase));
