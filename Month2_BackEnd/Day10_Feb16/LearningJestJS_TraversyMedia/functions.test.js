const { TestScheduler } = require('jest');
const functions = require('./functions');

test('Adds 2 + 2 equal 4', () => {
    // Using the basic Jest Matcher, toBe()
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 not equal 5', () => {
    // Using not.toBe()
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be NULL', () => {
    // Testing falsy using toBeNull()
    expect(functions.isNull(2, 2)).toBeNull();
});

test('Should be FALSY', () => {
    // Testing falsy using toBeFalsy()
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
    // toBe() is only for primitive type, we need toEqual() here
    expect(functions.createUser()).toEqual({firstName: 'Brad', lastName: 'Travery'});
});

// Coding directing into jest:
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    const load3 = 800;
    expect(load1 + load2).toBeLessThan(1600);
    expect(load1 + load3).toBeLessThanOrEqual(1600);
})

// Testing reguar expression
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// Testing array
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})
