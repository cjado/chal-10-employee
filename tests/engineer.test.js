const Engineer = require('../lib/Engineer')

describe('Engineer class test', () => {
    describe('init', () => {
        it('test constructor properties', ()=> {
            let engObj = new Engineer('John', 'jdalfaro4@gmail.com', 1, 'jdalfaro4');

            expect(engObj.name).toEqual('John')
            expect(engObj.email).toEqual('jdalfaro4@gmail.com');
            expect(engObj.id).toEqual(1);
            expect(engObj.role).toEqual('Engineer');
            expect(engObj.github).toEqual('jdalfaro4');

        })
    })

    describe('test get github function', () => {
        let engObj = new Engineer("max", "max12@ymail.com", 2, "max123");

        expect(engObj.getGithub()).toEqual("max123")
    })
})