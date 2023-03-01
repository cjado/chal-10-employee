const Manager = require('../lib/Manager')

describe('Manager class test', () => {
    describe('init', () => {
        it('test constructor properties', ()=> {
            let manObj = new Manager('John', 'jdalfaro4@gmail.com', 1, 100);

            expect(manObj.name).toEqual('John')
            expect(manObj.email).toEqual('jdalfaro4@gmail.com');
            expect(manObj.id).toEqual(1);
            expect(manObj.role).toEqual('Manager');
            expect(manObj.officenumber).toEqual(100);

        })
    })

    describe('test get office number function', () => {
        let manObj = new Manager("max", "max12@ymail.com", 2, 101);

        expect(manObj.getOfficeNumber()).toEqual(101)
    })
})