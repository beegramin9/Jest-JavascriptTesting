let animals = ['elephant','zebra','bear','tiger']

// top level에 선언하면 모든 describe블럭에 실행된다
describe("animals array", () => {
    // 각 describe에서 됩니다.
    beforeEach(()=>{
        animals = ['elephant','zebra','bear','tiger']
    })

    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length-1]).toBe("aligator");
    })

    it("should add animal to beginning of array", () => {
        animals.unshift("aligator");
        expect(animals[0]).toBe("aligator");
    })

    // over tests, the original data was manipulated
    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })
})

describe('testing something else', () => {
  // only this test block gets executed
  /* If you have a test that often fails 
  when it's run as part of a larger suite, 
  but doesn't fail when you run it alone, 
  it's a good bet that something from a different test is interfering with this one.
  You can often fix this by clearing some shared state with beforeEach. 
  If you're not sure whether some shared state is being modified, 
  you can also try a beforeEach that logs data. */
  it.only("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
