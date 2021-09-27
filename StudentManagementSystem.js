var numberOfStudents = 0;
var students = new Array();
var firstName;
var lastName;

function createFullName(firstName, lastName) {
  return ` ${firstName} + " " + ${lastName}`;
}

function addStudent() {
  students.push(name);
  numberOfStudents = students.length;
}

//function getStudentByInitials(firstInitials, secondInitial) {
//  while ()
//}

function isFullName(name) {
  var hehe = name.split(' ')
  if (hehe.length > 1) {
    return true
  }
}

function getNumberOfStudents() {
  return numberOfStudents;
}

function clearStudents() {
  students.length = 0;
  numberOfStudents = 0;
}

addStudent(createFullName("Josh","Bull"))
addStudent(createFullName("John","Doe"))
addStudent(createFullName("Jane","Doe"))
addStudent(createFullName("Herlock","Sholmes"))
addStudent(createFullName("Mia","Fey"))
