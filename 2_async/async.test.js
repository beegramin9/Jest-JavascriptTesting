const fetchData = require('./async');
//  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

const mockFn = jest.fn( () => ( { userId: 1, id: 1, title: 'delectus aut autem', completed: false } ) )
it("promise", () => {
    fetchData(1).then(todo => expect(todo).toHaveProperty("id", 1));
});

it("async await", async () => {
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
});