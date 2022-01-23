const dbModule = {
    add : (num1, num2) => (num1 + num2),
    createUser: (name) => {
        console.log("유저가 생성되었습니다")
        return {
            name,
        }
    },
    getUsers: () => console.log("유저 리스트를 가져왔습니다")
}

module.exports = dbModule;