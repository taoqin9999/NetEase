/**
 * 推荐接口
 *
 * @class netEase.newshotApp
 */
var netEase = (function(core) {
    'use strict';

    var newshotApp = core.newshotApp = core.newshotApp || {};

    newshotApp.getNewshotList = function(req) {
        return core.utils.ajax({
            url: core.config.newshotDataUrl,
            data: req
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

        return newshotApp.getNewshotList(req);
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

        return newshotApp.getNewshotList(req);
    };


    return core;
}(netEase));
