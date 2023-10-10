import { sum } from "./index";

describe("Testing sum()", () => {
    it("should return the right results with valid arguments", () => {
        expect(sum(2, 2)).toBe(46); //forcing a fail to check cicd
        expect(sum(1.5, 2.5)).toBe(4);
        expect(sum(-2, -2)).toBe(-4);
    });
});
