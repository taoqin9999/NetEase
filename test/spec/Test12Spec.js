describe("Test12Spec", function() { //测试组  
    'use strict';

    var timerCallback;
    beforeEach(function() {
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install(); //安装Jasmine Clock
    });
    afterEach(function() {
        jasmine.clock().uninstall(); //卸载Jasmine Clock
    });
    it("causes a timeout to be called synchronously", function() {
        setTimeout(function() { //声明回调函数tick到100ms就触发
            timerCallback();
        }, 100);
        expect(timerCallback).not.toHaveBeenCalled();
        jasmine.clock().tick(101); //tick 101 会触发上面注册的setTimeout
        expect(timerCallback).toHaveBeenCalled();
    });
    it("causes an interval to be called synchronously", function() {
        setInterval(function() {
            timerCallback();
        }, 100);
        expect(timerCallback).not.toHaveBeenCalled();
        jasmine.clock().tick(101); //tick 101 会触发上面注册的setInterval
        expect(timerCallback.calls.count()).toEqual(1);
        jasmine.clock().tick(50); //tick(50)不足以触发上面注册的setInterval
        expect(timerCallback.calls.count()).toEqual(1);
        jasmine.clock().tick(50); //tick(50+50=100)足以再次触发上面注册的setInterval
        expect(timerCallback.calls.count()).toEqual(2);
    });
});
