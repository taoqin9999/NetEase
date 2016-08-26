describe("Test6Spec", function() {
    'use strict';

    var foo, bar, fetchedBar;
    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function() {
                return bar;
            }
        };

        spyOn(foo, "getBar").and.callFake(function() { //指定callFake方法
            return 1001;
        });
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", function() {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", function() {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", function() {
        expect(fetchedBar).toEqual(1001); //执行callFake方法，返回1001
    });
});
