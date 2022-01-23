const forEach = (items, callback) => {
    // mock the callback function

    /* capturing calls to the function,
    the parameters passed in those calls, 
    capturing instances of constructor functions when instantiated with new, 
    allowing test-time configuration of return values.*/
    for(let i=0; i<items.length; i++) {
        callback(items[i]);
    }
}

it('mock callback', () => {
    // argument: 함수
    const mockCallback = jest.fn( (x) => {return x+42} );
    forEach( [0,1] , mockCallback);

    console.log(mockCallback.mock.calls);
    /* mock 객체는 
    mockFunction의 호출횟수 = mockCallback.mock.calls.length
    args = mockCallback.mock.calls, 
    return = mockCallback.mock.results 값을 가지고있다 */

    // The mock function is called twice, hence length == 2
    // [ call1, call2 ]
    expect(mockCallback.mock.calls.length).toBe(2);
    // First call, first arg was 1 
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    // Second call, first arg was 1 
    expect(mockCallback.mock.calls[1][0]).toBe(1);
});


