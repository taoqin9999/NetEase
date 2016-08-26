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

        spyOn(foo, 'getBar').and.callThrough(); //调用and.callThrough方法
        foo.setBar(123);
        fetchedBar = foo.getBar(); //因为and.callThrough，这里执行的是foo.getBar方法，而不是spy的方法
    });
    it("tracks that the spy was called", function() {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", function() {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", function() {
        expect(fetchedBar).toEqual(123);
    });
});
