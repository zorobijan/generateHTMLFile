const Manager = require("../lib/manager.js")

describe('Manager', () => {

    describe('initialization', () => {

    });

    describe('getRole', () => {

        it('should return Manager when asked what the role is', () => {
            //Arrange
            //Act
            let newManager = new Manager("sam", 1, "sam@gmail.com", "555.555.5555")

            //Assert
            expect(newManager.getRole()).toEqual("Manager");
            // expect(newManager.getOfficeNumber()).toEqual("555.555.5555")


        })
        
        
    });
});