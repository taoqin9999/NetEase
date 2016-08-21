/**
 * 推荐接口
 *
 * @class netEase.newshotApp
 */
var netEase = (function(core) {
    'use strict';

    var newshotApp = core.newshotApp = core.newshotApp || {};

    var getNewshotList = function(req) {
        return core.utils.ajax({
            url: core.config.newshotDataUrl,
            data: req
        }).done(function(resp) {
            core.log('resp begin:');
            core.log(resp);
        }).fail(function(resp) {
            core.error(resp);
        });
    };

    /**
     * 获取娱乐列表
     * @param {Object} req
     * @param {number} req.offset offset
     * @param {number} req.limit limit
     * @return {netEase.data.RecommendList}
     */
    newshotApp.getEntertainmentList = function(req) {
        req.channel = 2;

        return getNewshotList(req);
    };

    /**
     * 获取体育列表
     * @param {Object} req
     * @param {number} req.offset offset
     * @param {number} req.limit limit
     * @return {netEase.data.RecommendList}
     */
    newshotApp.getSportsList = function(req) {
        req.channel = 3;

        return getNewshotList(req);
    };


    return core;
}(netEase));
