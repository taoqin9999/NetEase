describe("Test4Spec", function() {
    'use strict';

    xit("can be declared 'xit'", function() { //第一种，使用xit将测试用例直接屏蔽
        expect(true).toBe(false);
    });
    it("can be declared with 'it' but without a function"); //第二种，只声明it，不定义回调函数
    it("can be declared by calling 'pending' in the spec body", function() {
        expect(true).toBe(true);
        pending('this is why it is pending'); //第三种，使用pending函数
    });
});
