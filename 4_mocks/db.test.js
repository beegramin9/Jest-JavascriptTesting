const dbModule = require('./db.module');

/* it("실제로 createUser를 불러서 db와 interaction한다" , () => {
    const user = dbModule.createUser("Mike")
    expect(user.name).toBe("Mike");
}) */

// mock으로 대체하면, 함수명이 같아도 실제로 db와 interact하는 dbModule을 부르지 않는다
jest.mock("./db.module")

dbModule.createUser.mockResolvedValue({ name: "Mike"});

it("mock createUser" , () => {
    dbModule.createUser("Mike").then( res => {
        expect(res.name).toBe("Mike");
    })
})