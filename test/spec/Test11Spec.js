describe("Test11Spec", function() { //测试组  
    'use strict';

    var whatAmI;

    beforeEach(function() {
        whatAmI = jasmine.createSpy('whatAmI'); //创建一个spy
        whatAmI("I", "am", "a", "spy");
    });
    it("is named, which helps in error reporting", function() {
        expect(whatAmI.and.identity()).toEqual('whatAmI');
    });
    it("tracks that the spy was called", function() {
        expect(whatAmI).toHaveBeenCalled();
    });
    it("tracks its number of calls", function() {
        expect(whatAmI.calls.count()).toEqual(1);
    });
    it("tracks all the arguments of its calls", function() {
        expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
    });
    it("allows access to the most recent call", function() {
        expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
    });
});
