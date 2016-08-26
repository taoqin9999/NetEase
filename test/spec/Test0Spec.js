describe("Test0Spec", function() { //测试组  
    'use strict';

    var a;
    it("A spec", function() { //测试用例
        a = true;
        expect(a).toBe(true); //期望匹配
    });

    it("B spec", function() { //测试用例
        expect(a).toBe(true); //期望匹配
    });
    describe("a suite", function() { //测试组内分组
        it("a spec", function() { //测试用例
            expect(a).toBe(true); //期望匹配
        });
    });

});
