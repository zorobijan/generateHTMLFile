const Engineer = require("../lib/Engineer")

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
            // expect(newEngineer.getGitHub()).toEqual("github.com/sam")


        })
        
        
    });
});