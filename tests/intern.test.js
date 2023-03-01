const Intern = require('../lib/Intern')

describe('Intern class test', () => {
    describe('init', () => {
        it('test constructor properties', ()=> {
            let intObj = new Intern('John', 'jdalfaro4@gmail.com', 1, "UT");

            expect(intObj.name).toEqual('John')
            expect(intObj.email).toEqual('jdalfaro4@gmail.com');
            expect(intObj.id).toEqual(1);
            expect(intObj.role).toEqual('Intern');
            expect(intObj.school).toEqual('UT');

        })
    })

    describe('test get school function', () => {
        let intObj = new Intern("max", "max12@ymail.com", 2, "UT2");

        expect(intObj.getSchool()).toEqual("UT2")
    })
})