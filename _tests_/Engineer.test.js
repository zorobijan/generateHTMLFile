const Engineer = require("../lib/engineer.js")

describe('Engineer', () => {

    describe('initialization', () => {

    });

    describe('getRole', () => {

        it('should return Engineer when asked what the role is', () => {
            //Arrange
            //Act
            let newEngineer = new Engineer("sam", 1, "sam@gmail.com", "github.com/sam")

            //Assert
            expect(newEngineer.getRole()).toEqual("Engineer");


        })
        
        
    });
});