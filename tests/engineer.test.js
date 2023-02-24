const Engineer = require('.../lib/engineer')

test('get engineer github', () => {
    const engineer = new Engineer('CJ', "cj@gmail.com", 21, "cjado.github.io")
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));;
})

test('get engineer role', () => {
    const engineer = new Engineer('CJ', "cj@gmail.com", 21, "cjado.github.io")
    expect(engineer.getRole()).toEqual("Engineer");
})
