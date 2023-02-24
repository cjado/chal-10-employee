const Intern = require('.../lib/intern')

test('get intern school', () => {
    const intern = new Intern('CJ', "cj@gmail.com", 21, "TexasTech")
    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('get intern role', () => {
    const intern = new Engineer('CJ', "cj@gmail.com", 21, "TexasTech")
    expect(intern.getRole()).toEqual("Intern");
})
