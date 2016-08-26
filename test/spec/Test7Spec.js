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

        spyOn(foo, "getBar").and.returnValue(745); //指定返回值为745
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
        expect(fetchedBar).toEqual(745); //默认返回指定的returnValue值
    });
});
