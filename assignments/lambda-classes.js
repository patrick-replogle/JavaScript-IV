class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.subject = attributes.subject;
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
    demo() {
        return `Today we are learning about ${this.speciality}.`
    }
    grade() {
        return `${Student.name} receives a perfect score on ${this.speciality}.`
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
    PRAssignment() {
        return `${Student.name} has submitted a PR for ${this.favSubjects}`;
    }
    springChallenge() {
        return `${Student.name} has begun sprint challnge on ${this.favSubjects}.`
    }
};

class ProjectManager extends Person {
    constructors(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
        this.channel = attributes.channel;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel stnady times!`
    }
    debugsCode() {
        return `${this.name} debubs ${student.name}'s code on {this.}`
    }
};


