describe("Test0Spec", function() { //测试组  
    'use strict';

    var value;

    // setTimeout代表一个异步操作。
    beforeEach(function(done) {
        setTimeout(function() {
            value = 0;
            // 调用done表示回调成功，否则超时。
            done();
        }, 1000);
    });

    // 如果在beforeEach中的setTimeout的回调中没有调用done，最终导致下面的it因超时而失败。
    it("should support async execution of test preparation and expectations", function(done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done();
    });

});
