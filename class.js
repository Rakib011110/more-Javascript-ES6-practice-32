class Instructor {
    name;
    designation = ' We Couse Instructor';
    team = 'Web Team';
    location;


    constructor(name, location) {
        this.name = name
        this.location = location

    }
    startSuportSession(time) {
        ` start the support session at ${time}`

    }

    createQuiz(module) {
        console.log(` Please create quiz for module ${module} `);
    }


}

const ammir = new Instructor()
console.log(ammir);
ammir.startSuportSession('9.00')
ammir.createQuiz(60)

const solaiman = new Instructor('solaiman', 'dhaka')
console.log(solaiman);