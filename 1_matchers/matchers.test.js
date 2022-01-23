// need to import modules to test functions inside
const matchers = require("./matchers");

// Not a test, just a way to encompass many "it" blocks
describe("", () => {
    // "it": unit block
    it("Primitive Type: toBe()", () => {
        // where the test lives
        const result = matchers.sum(1,2);
        expect(result).toBe(3); // memory level same
    })
    
    // https://webclub.tistory.com/638
    it("Reference Type: toEqual()", () => {
        const object = {};
        expect(object).toEqual({});
    })
})

describe("Truthy or Falsy", () => {
    it("null", () => {
        const nullValue = null;
        // can use multiple expects, but only one is best practice
        expect(nullValue).toBeFalsy();
        expect(nullValue).toBeNull();
        expect(nullValue).not.toBeTruthy();
        expect(nullValue).not.toBeUndefined();
    })
})

describe("numbers", () => {
    it("int, precise", () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);
        expect(value).not.toBeLessThan(4);
        expect(value).toBeLessThanOrEqual(4);
    })

    it("float, can't be precise", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.29999999999999);
    })
})

describe("strings", () => {
    it("regular expression: there is no I in team", () => {
        expect("team").not.toMatch(/I/);
    })
})

describe("arrays", () => {
    it("contain", () => {
        const shoppingList = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'milk',
        ];
        expect(shoppingList).toContain("milk");
    })
})

describe("exceptions", () => {
    it("function that throws error", () => {
        function compileAndroidCode() {
            throw new Error("you are using the wrong JDK")
        }
        expect(compileAndroidCode).toThrow("you are using the wrong JDK");
    })
})