function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(!this.marks) return undefined;
  if(this.marks || marks.length > 0){
    this.marks.push(...marks);
  }  
}

Student.prototype.getAverage = function () {
  if(!this.marks || this.marks == 0) return 0;
  return Number((this.marks.reduce((sum, number) => sum + number, 0)/this.marks.length).toFixed(0));
}

Student.prototype.exclude = function (reason) {  
  this.excluded = reason;
  delete this.marks;
  delete this.subject; 
}