describe('replace function tests', function() {
    it("print input with no changes", function () {
        expect(replacement("a","a","a")).to.equal("a");
    });

    it("replace one letter with another", function () {
        expect(replacement("a","a","b")).to.equal("b");
    });

});
