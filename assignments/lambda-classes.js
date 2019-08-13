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
        return `${this.favSubjects}`;
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun the sprint challange on ${subject}.`
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
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
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
    favSubjects: ['Javscipt', 'Python', 'C']
})

const james = new Student ({
    name: 'James',
    age: 21,
    location: 'Scotland',
    previousBackground: 'Banking',
    className: 'WebPT9',
    favSubjects: ['Javscipt', 'Python', 'C']
})

const carina = new Student ({
    name: 'Carina',
    age: 26,
    location: 'Los Angeles',
    previousBackground: 'Coding',
    className: 'WebPT9',
    favSubjects: ['Javscipt', 'Python', 'C']
})

const cj = new ProjectManager ({
    name: 'CJ',
    age: 26,
    location: 'Los Angeles',
    gradClassName: 'Web16',
    favInstructor: 'Josh Knell',
    channel: 'zoom.com'
})

const gina = new ProjectManager ({
    name: 'Gina Chistians',
    age: 32,
    location: 'NYC',
    gradClassName: 'Web16',
    favInstructor: 'Pace Ellsworth',
    channel: 'zoom.com'
})

const fred = new ProjectManager ({
    name: 'Fred',
    age: 39,
    location: 'Chicago',
    gradClassName: 'Web16',
    favInstructor: 'Dan Frehner',
    channel: 'zoom.com'
})

console.log(todd.speak());
console.log(josh.catchPhrase)
console.log(pace.demo('Javascript'));
console.log(pace.grade('Carina', 'Javascript'));
console.log(gina.favInstructor);
console.log(fred.age);
console.log(cj.channel);
console.log(josh.grade(patrick, 'Javascript'));
console.log(cj.standUp('webpt9'))
console.log(gina.debugsCode(patrick, 'Javascript'));
console.log(james.listsSubjects());
console.log(carina.PRAssignment(carina, 'CSS'));
console.log(james.sprintChallenge(james, 'Python'));
console.log(todd.grade(fred, 'C#'));

