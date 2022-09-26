const Employee = require("./Employee")


class Engineer extends Employee{

    constructor(name, id, email, school){
    
    super(name, id, email)
    this.github = github
    }

    getGitHub(){

    }

    getRole(){
         
        return "Engineer"
    }

}

module.exports = Engineer