const mockFn = jest.fn();
mockFn();
mockFn(1);

describe("mockFn.mock.calls: list of lists of each called fn's args", () => {
    it("mockFn.mock.calls.length: number of time fn gets called", () => {
        expect(mockFn.mock.calls.length).toBe(2);
    });
    it("the first arg of the second called fn is 1", () => {
        expect(mockFn.mock.calls[1][0]).toBe(1);
    });
});

const mockFn2 = jest.fn();

function forEachAdd1(arr) {
    arr.forEach(num => {
        mockFn2(num+1);
        // 굳이 callback함수를 따로 만들지 않아도
        // mockFn2을 사용하면 forEachAdd1이 잘 작동함을 알 수 있다.
    })
}

forEachAdd1([10, 20, 30]);

describe('forEachAdd1', () => {
    it('mockFn2 gets called three times ', () => {
        expect(mockFn.mock.calls.length).toBe(2);
        
    });
    it('args are 11, 21, 31 ', () => {
        expect(mockFn2.mock.calls[0][0]).toBe(11);
        expect(mockFn2.mock.calls[1][0]).toBe(21);
        expect(mockFn2.mock.calls[2][0]).toBe(31);
    });
});

const mockFn3 = jest.fn(num => num+1);
mockFn3(10);
mockFn3(20);
mockFn3(30);

it('mockFn.mock.results: list containing return values', () => {
    console.log(mockFn3.mock.results);
    expect(mockFn3.mock.results[0].value).toBe(11);
    expect(mockFn3.mock.results[1].value).toBe(21);
    expect(mockFn3.mock.results[2].value).toBe(31);
});

// return값을 바꾸고 싶다면
const mockFn4 = jest.fn();

mockFn4
.mockReturnValueOnce(true) // 바꾸는데 의의
.mockReturnValueOnce(false)
.mockReturnValueOnce(true) 
.mockReturnValueOnce(false)
.mockReturnValue(true) // 비교에 의의


const result = [1, 2, 3, 4, 5].filter(num => mockFn4(num));

it('홀수 1, 3, 5', () => {
    expect(result).toEqual([1,3,5]);
});

const mockFn5 = jest.fn();

mockFn5
.mockResolvedValue({name: "Mike"})

it("async return값을 mock할 수 있다", () => {
    mockFn5().then(res => {
        expect(res.name).toBe("Mike");
    })
});
