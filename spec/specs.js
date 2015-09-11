describe('countBy function tests', function() {
    it("given target and increment are both 1 will return an array with one element containing the integer 1", function () {
        expect(countBy(1,1)).to.eql([1]);
    });
});
