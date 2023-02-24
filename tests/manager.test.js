const Manager = require('.../lib/manager')

test('get manager office number', () => {
    const manager = new Manager('CJ', "cj@gmail.com", 21, 123469)
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

test('get manager role', () => {
    const manager = new Engineer('CJ', "cj@gmail.com", 21, 123469)
    expect(manager.getRole()).toEqual("Manager");
})
