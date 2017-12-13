//Student Record List
class StudentRecord{
  constructor(){
   this.records = {
     '100L' : [],
     '200L' : [],
     '300L' : [],
     '400L' : [],
     '500L' : []
   } 
  }
 
   reArrange(){
     let newRecords = {
       '100L' : [],
       '200L' : [],
       '300L' : [],
       '400L' : [],
       '500L' : []
     };
     for(record in this.records){
       record.map(function(student){
         newRecords[student.class].push(student);
       });
     }
     this.records = newRecords
     return this.records;
   }
 
   admit(student){
     this.records[student.class].push(student);
   }
 
   changeClass(student,newClass){
    let studentIndex = this.records[student.class].findIndex( (studentInRecord) => studentInRecord._id === student._id );
     if(studentIndex > -1){
       this.records[student.class].splice(studentIndex,1);
     }
     student.class = newClass;
     this.admit(student);
   }
 
 }

var studentRecord = new StudentRecord();

//Proxy Handler
var handler = {
  get(target, key) {
    return target[key];
  },

  set(target, key, value) {
    if (key === 'gender') {
      console.log(`Cannot change gender of student`);
      return false;
    } else
    if (key === 'class') {
      if(!validateClass(value)){
        console.log("Class is invalid");
        return false;
      }
      alertStudentRecord(target,value);
      return true;
    } 
    target[key] = value;
    return true;
  },
};

//Student Class
class Student{
  constructor(obj){
    let newObject = {};
    newObject._id = generateID();
    newObject.name = obj.hasOwnProperty('name') ? obj.name : flag("student doesn't have a name");
    newObject.age = obj.hasOwnProperty('age') ?  obj.age : flag("student doesn't have an age");
    newObject.gender = obj.hasOwnProperty('gender') ? obj.gender : flag("student doesn't have a gender");
    if(obj.hasOwnProperty('class')){
      if(validateClass(obj.class)){
        newObject.class = obj.class;
      }
      else{
        flag("Class doesn't exist in this school");
      }
    }
    else{
      flag("student doesn't have a class");
    }

    return new Proxy(newObject,handler);
    
  }
}

function flag(err) {
  throw new Error(err);
}

function generateID(){
  return '_' + Math.random().toString(36).substr(2, 9);
}

function validateClass(cls){
  return new StudentRecord().records.hasOwnProperty(cls);
}

function alertStudentRecord(student,newClass){
  studentRecord.changeClass(student,newClass);
}

tomide = new Student({name : "tomide", age: 20,gender : 'male',class:'400L'})
kemi = new Student({name : "kemi", age: 22, gender: 'female', class: '400L'});

studentRecord.admit(tomide);
studentRecord.admit(kemi);

// console.log(studentRecord.records);

kemi.class = '200L';
tomide.class = '500L';

// console.log(studentRecord.records);