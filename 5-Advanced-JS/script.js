//Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.lastName = 'Auguste';
Person.prototype.calculateAge = function(yearOfBirth){
      console.log(2021 - this.yearOfBirth)
}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'desinger');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
*///////////////////////////////

///Object.create
/*
var personProto = {
    calculateAge: function() {
      console.log(2021 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
  name: {value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'designer'},
});
*/

//Primitives vs objects
/*
//primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objests
var obj1 = {
    name:'John',
    age: 26,
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//funcitons
var age = 27;
var obj = {
    name:'Jonas',
    city: 'Lisbon'
}

function change (a, b) {
    a = 30;
    b.city = 'San Francisco'
}

change (age, obj);

console.log(age);
console.log(obj.city);
*///////////////////

//Passing functions as arguments 
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn)
{
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el)
{
    return 2021 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81){
      return Math.round (206.9 - (0.67 * el));
  }else{
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate)
console.log(rates)
console.log(ages);
*/

///Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name){
          console.log(name + ', can you please explain what UX design is?');
        }
    }else if (job === 'teacher'){
        return function(name){
          console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
          console.log('Hello ' + name + ', what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark')
*/

//Immediately Invoked Function Expressions IIFE
/*
function game() {
  var score = Math.random() * 10 + 1;
  console.log(score >= 5);
}
game();


(function () {
  var score = Math.random() * 10 + 1;
  console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
  var score = Math.random() * 10 + 1;
  console.log(score >= 5 - goodLuck);
})(5);
*/

