const { TestScheduler } = require('jest');
const functions = require('./functions');

test('Adds 2 + 2 equal 4', () => {
    // Using the basic Jest Matcher, toBe()
    expect(functions.add(2, 2)).toBe(4);
})

test('Adds 2 + 2 not equal 5', () => {
    // Using not.toBe()
    expect(functions.add(2, 2)).not.toBe(5);
})
