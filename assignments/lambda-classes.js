class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, and I am from ${this.location}.`
    }
};

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
};

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        const subjects = [];
        const newArray = Student.favSubjects.forEach(function (element){
            subjects.push(element.favSubjects);
        });   
    }
    listsSubjets() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challnge on ${subject}.`
    }
};

class ProjectManager extends Person {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
        this.channel = attributes.channel;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode() {
        return `${this.name} debubs ${student.name}'s code on {this.}`
    }
};

const pace = new Instructor ({
    name: 'Pace',
    age: 34,
    location: 'Seattle',
    speciality: 'Javascript',
    favLanguage: 'Javscript',
    catchPhrase: 'Word to you mother.'
});

const josh = new Instructor ({
    name: 'Josh',
    age: 40,
    location: 'San Francisco',
    speciality: 'CSS',
    favLanguage: 'CSS',
    catchPhrase: 'Word up.'
});

const todd = new Instructor ({
    name: 'Todd',
    age: 42,
    location: 'New York',
    speciality: 'Python',
    favLanguage: 'Python',
    catchPhrase: 'Word.'
});

const patrick = new Student ({
    name: 'Patrick',
    age: 34,
    location: 'Portland',
    previousBackground: 'Retail',
    className: 'WebPT9',
    // favSubjects= ['Javscipt', 'Python', 'C']
})

console.log(todd.speak());
console.log(josh.catchPhrase)
console.log(pace.demo('javscript'));
console.log(pace.grade(patrick, 'javascript'));
