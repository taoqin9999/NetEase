describe('RecommendAppSpec', function() {
    'use strict';

    var resp;

    // 代表一个异步操作。
    beforeEach(function(done) {
        netEase.recommendApp.getRecommendList({
            offset: 0,
            limit: 10
        }).done(function(_resp) {
            resp = _resp;
            done();
        });
    });

    // 如果在beforeEach中的异步操作的回调中没有调用done，最终导致下面的it因超时而失败。
    it("get Recommend List", function(done) {
        expect(resp).toBeDefined();
        expect(resp.length).toBeGreaterThan(2);
        done();
    });
});
