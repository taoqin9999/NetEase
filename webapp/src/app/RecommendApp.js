/**
 * 推荐接口
 *
 * @class netEase.recommendApp
 */
var netEase = (function(core) {
    'use strict';

    var recommendApp = core.recommendApp = core.recommendApp || {};

    /**
     * 获取推荐列表
     * @param {Object} req
     * @param {number} req.offset offset
     * @param {number} req.limit limit
     * @return {netEase.data.RecommendList}
     */
    recommendApp.getRecommendList = function(req) {

        return core.utils.ajax({
            url: core.config.recommendDataUrl,
            data: req
        }).fail(function(resp) {
            core.error(resp);
        });
    };

    return core;
}(netEase));
