console.log("🔥🔥🔥🔥🔥🔥🔥 PART II 🔥🔥🔥🔥🔥🔥🔥");
// CODE here for your Lambda Classes

// Person Class

class Person {
  constructor(arg) {
    this.name = arg.name;
    this.age = arg.age;
    this.location = arg.location;
    this.gender = arg.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

// Instructor Class

class Instructor extends Person {
  constructor(arg) {
    super(arg);
    this.speciality = arg.speciality;
    this.favLanguage = arg.favLanguage;
    this.catchPhrase = arg.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

// Student Class

class Student extends Person {
  constructor(arg) {
    super(arg);
    this.previousBackground = arg.previousBackground;
    this.className = arg.className;
    this.favSubjects = arg.favSubjects;
  }

  listSubjects() {
    this.favSubjects.forEach(subject => {
      console.log(`${subject}`);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

// Project Manager Class

class ProjectManager extends Instructor {
  constructor(arg) {
    super(arg);
    this.gradClassName = arg.gradClassName;
    this.favInstructor = arg.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// Objects for Classes

// => Person objects
const brian = new Person({
  name: "Brian",
  age: 27,
  location: "Athboy, Ireland",
  gender: "M"
});

const tim = new Person({
  name: "Tim",
  age: 52,
  location: "New York, USA",
  gender: "M"
});

// => Instructor objects
const bernie = new Instructor({
  name: "Bernie",
  age: 49,
  location: "Dublin, Ireland",
  gender: "F",
  speciality: "Functional programming",
  favLanguage: "JavaScript",
  catchPhrase: "If Hemingway Wrote JavaScript is a strange and beautiful book."
});

const thomas = new Instructor({
  name: "Thomas",
  age: 38,
  location: "Köln, Germany",
  gender: "M",
  speciality: "React",
  favLanguage: "JavaScript",
  catchPhrase: "I React - you React!"
});

// => Student objects
const betty = new Student({
  name: "Betty",
  age: 19,
  location: "Malmö, Norway",
  gender: "F",
  previousBackground: "School graduate",
  className: "WEBEU3",
  favSubjects: ["HTML", "CSS", "JS"]
});

const debie = new Student({
  name: "Debie",
  age: 24,
  location: "Turin, Italy",
  gender: "F",
  previousBackground: "College dropout in UX",
  className: "UXEU2",
  favSubjects: ["Design Theory", "User Behaviour", "Testing"]
});

const robert = new Student({
  name: "Robert",
  age: 28,
  location: "Dijon, France",
  gender: "M",
  previousBackground: "Digital marketing specialist",
  className: "WEBEU3",
  favSubjects: ["JS", "Computer Science", "Algorithms"]
});

const diana = new Student({
  name: "Diana",
  age: 31,
  location: "Sofia, Bulgaria",
  gender: "F",
  previousBackground: "Graphic Designer",
  className: "UXEU2",
  favSubjects: ["Design Theory", "User Behaviour"]
});

// => ProjectManager objects
const martin = new ProjectManager({
  name: "Martin",
  age: 30,
  location: "Warsaw, Poland",
  gender: "M",
  speciality: "React",
  favLanguage: "JavaScript",
  catchPhrase: "I React - you React!",
  gradClassName: "CS5",
  favInstructor: "Tim Apple"
});

const lucas = new ProjectManager({
  name: "Lucas",
  age: 32,
  location: "Valencia, Spain",
  gender: "M",
  speciality: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Siesta time!",
  gradClassName: "CS3",
  favInstructor: "Tim Apple"
});
