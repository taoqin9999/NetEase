describe("Test5Spec", function() {
    'use strict';

    var foo, bar = null;
    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar'); //给foo对象的setBar函数绑定追踪
        foo.setBar(123);
        foo.setBar(456, 'another param');
    });
    it("tracks that the spy was called", function() {
        expect(foo.setBar).toHaveBeenCalled(); //toHaveBeenCalled用来匹配测试函数是否被调用过
    });
    it("tracks all the arguments of its calls", function() {
        expect(foo.setBar).toHaveBeenCalledWith(123); //toHaveBeenCalledWith用来匹配测试函数被调用时的参数列表
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param'); //期望foo.setBar已经被调用过，且传入参数为[456, 'another param']
    });
    it("stops all execution on a function", function() {
        expect(bar).toBeNull(); //用例没有执行foo.setBar,bar为null
    });
});
