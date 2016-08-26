describe("Test9Spec", function() { //测试组  
    'use strict';

    var foo, bar;
    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            }
        };
        spyOn(foo, "setBar").and.throwError("quux"); //指定throwError
    });
    it("throws the value", function() {
        expect(function() {
            foo.setBar(123);
        }).toThrowError("quux"); //抛出错误异常
    });
});
