const Intern = require("../lib/intern.js")

describe('Intern', () => {

    describe('initialization', () => {

    });

    describe('getRole', () => {

        it('should return Intern when asked what the role is', () => {
            //Arrange
            //Act
            let newIntern = new Intern("sam", 1, "sam@gmail.com", "Online")

            //Assert
            expect(newIntern.getRole()).toEqual("Intern");
            // expect(newIntern.getSchool()).toEqual("Online")


        })
        
        
    });
});