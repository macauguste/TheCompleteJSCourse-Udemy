//Function constructor

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
