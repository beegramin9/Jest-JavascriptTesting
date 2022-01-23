// fetch() is supported by browser, meaning it can't work browserless
const axios = require('axios');

const fetchData = async (id) => {
    const response = await axios.get(
        // api에 문제가 있다면 함수의 로직이 맞아도 test가 실패할 수 있다.
        // api를 mock-up하자
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
}

fetchData(1);

module.exports = fetchData;