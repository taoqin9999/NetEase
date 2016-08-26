describe("Test10Spec", function() { //测试组  
    'use strict';

    var foo, bar = null;
    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar').and.callThrough();
    });
    it("can call through and then stub in the same spec", function() {
        foo.setBar(123);
        expect(bar).toEqual(123);
        foo.setBar.and.stub(); //把foo.setBar设置为原始状态，and.callThrough无效
        bar = null;
        foo.setBar(123); //执行赋值无效
        expect(bar).toBe(null);
    });
});
