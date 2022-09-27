const Employee = require("../lib/Employee")

describe('Employee', () => {

    describe('initialization', () => {


        it('should get initialized correctly', () => {
            //Arrange
            //Act
            let newEmployee = new Employee("sam", 1, "sam@gmail.com");


            //Assert
            expect(newEmployee.name).toEqual("sam")
            expect(newEmployee.id).toEqual(1)
            expect(newEmployee.email).toEqual("sam@gmail.com")

        })
    })


    describe('getName', () => {

        

        it('should return the name that I give it, upon instantiation', () => {

        })
            //Arrange
            //Act
            let newEmployee = new Employee("sam", 1, "sam@gmail.com")
            
            //Assert
            expect(newEmployee.getName()).toEqual("sam")
       




    })

    describe('getRole', () => {


    })
})