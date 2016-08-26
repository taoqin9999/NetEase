describe("Test2Spec", function() {
    'use strict';

    var foo = 0;
    beforeEach(function() {
        foo += 1;
        console.log("I am beforEach");
    });
    afterEach(function() {
        foo = 0;
        console.log("I am afterEach");
    });
    it("A spec1", function() {
        expect(foo).toEqual(1);
        console.log("I am spec1");
    });
    it("A spec2", function() {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
        console.log("I am spec2");
    });
});
