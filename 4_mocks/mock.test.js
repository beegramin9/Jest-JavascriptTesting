const mockFn = jest.fn(name => `I'm a ${name}`);
console.log(mockFn("Dale"));

it('should ', () => {
    expect(mockFn).toBeCalledTimes(1); // 호출횟수
    expect(mockFn).toBeCalledWith("Dale"); // 호출인자
});

//! spyOn: mock함수를 만들지 않고, 
// 어떤 객체의 메소드 호출 여부와 어떻게 호출되었는지를 알아야 할 때

const object = {
    method: (a, b) => a + b ,
};

const spyFn = jest.spyOn(object, "method");
//* add 메소드 호출 이후 호출 횟수와 argument를 spying
const result = object.method(2,3);

it('Spy ', () => {
    expect(spyFn).toBeCalledTimes(1);
    expect(spyFn).toBeCalledWith(2,3);
    expect(result).toBe(5);
});

