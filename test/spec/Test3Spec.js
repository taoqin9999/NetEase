describe("Test3Spec", function() {
    'use strict';

    beforeEach(function() {
        console.log("Initial 'this' object");
        this.foo = 0;
    });
    it("can use the 'this' to share state", function() {
        expect(this.foo).toEqual(0);
        this.bar = "Test This!";
        console.log("My 'this' object");
    });
    it("prevents 'Test This' by having an empty 'this' created for the next spec", function() {
        expect(this.foo).toEqual(0);
        expect(this.bar).toBe(undefined);
        console.log("My `this` object");
    });
});
