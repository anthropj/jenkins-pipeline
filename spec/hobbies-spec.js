const hobbies = require('../hobbies')
describe("API unit test suite", () => {
    describe("getHobbies", () => {
        const list = hobbies.getHobbies();
        it("return 5 hobbies", () => {
            expect(list.length).toEqual(5);
        });
        it("return 'jogging' as first hobby", () => {
            expect(list[0]).toBe("jogging");
        });
    })
})