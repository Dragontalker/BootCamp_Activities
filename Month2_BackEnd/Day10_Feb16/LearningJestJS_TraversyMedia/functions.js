const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (value) => value,
    createUser: () => {
        const user = {firstName: 'Brad'};
        user['lastName'] = 'Travery';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
};

module.exports = functions;