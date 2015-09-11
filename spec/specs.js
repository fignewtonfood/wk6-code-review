describe('replace function tests', function() {
    it("print input with no changes", function () {
        expect(replacement("a","a","a")).to.equal("a");
    });

    it("replace one letter with another", function () {
        expect(replacement("a","a","b")).to.equal("b");
    });

    it("replace one word with another", function () {
        expect(replacement("anteater","anteater","bear")).to.equal("bear");
    });

    it("replace one word in string with another word", function () {
        expect(replacement("Anteater sleeps.","Anteater","Bear")).to.equal("Bear sleeps.");
    });

    it("replace one word with multiple words", function () {
        expect(replacement("Anteater sleeps.","sleeps","snoozes and dreams")).to.equal("Anteater snoozes and dreams.");
    });

    it("replace multiple words with multiple words", function () {
        expect(replacement("Anteater sleeps.","Anteater sleeps","Bear grills")).to.equal("Bear grills.");
    });

    it("replace multiple instances", function () {
        expect(replacement("anteater and anteater", "anteater", "bear")).to.equal("bear and bear");
    });

    it("replace whole word only", function () {
        expect(replacement("I will fix this", "I", "You")).to.equal("You will fix this");
    });
});
