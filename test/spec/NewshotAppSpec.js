describe('NewshotAppSpec', function() {
    'use strict';

    describe('Entertainment', function() {
        var resp;

        // 代表一个异步操作。
        beforeEach(function(done) {
            netEase.newshotApp.getEntertainmentList({
                offset: 0,
                limit: 10
            }).done(function(_resp) {
                resp = _resp;
                done();
            });
        });

        // 如果在beforeEach中的异步操作的回调中没有调用done，最终导致下面的it因超时而失败。
        it("get Entertainment List", function(done) {
            expect(resp).toBeDefined();
            done();
        });

        it("get Entertainment List length toBeGreaterThan 2", function(done) {
            expect(resp.length).toBeGreaterThan(2);
            done();
        });
    });

    describe('Sports', function() {
        var resp;

        // 代表一个异步操作。
        beforeEach(function(done) {
            netEase.newshotApp.getSportsList({
                offset: 0,
                limit: 10
            }).done(function(_resp) {
                resp = _resp;
                done();
            });
        });

        // 如果在beforeEach中的异步操作的回调中没有调用done，最终导致下面的it因超时而失败。
        it("get Sports List", function(done) {
            expect(resp).toBeDefined();
            done();
        });
    });
});
