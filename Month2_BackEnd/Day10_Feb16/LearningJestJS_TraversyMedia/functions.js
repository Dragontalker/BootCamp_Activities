const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (value) => value,
    createUser: () => {
        const user = {firstName: 'Brad'};
        user['lastName'] = 'Travery';
        return user;
    }
};

module.exports = functions;